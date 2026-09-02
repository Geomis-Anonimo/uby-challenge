/* Um aparelho da bancada: app do motorista, mapa e contabilidade do plano de dados.
 *
 * A bancada comprime o tempo: ESCALA segundos de turno para cada segundo de
 * relógio. O rótulo "×60" no topo da tela deixa isso explícito.
 */
(function (global) {
  'use strict';

  var CENTRO = { latitude: -21.3767, longitude: -46.5253 };
  var DURACAO_CORRIDA_S = 40;      // duração da corrida em segundos de relógio
  var PING_MS = 2000;
  var ESCALA = 60;                 // 1s de bancada = 1min de turno

  // Plano pré-pago típico de motorista: 20 GB/mês por R$ 60.
  var PRECO_POR_GB = 3.0;
  var FRANQUIA_DIARIA_BYTES = (20 * 1024 * 1024 * 1024) / 30;

  var ETAPAS = [
    { ate: 0.12, texto: 'A caminho do passageiro' },
    { ate: 0.22, texto: 'Aguardando embarque' },
    { ate: 0.94, texto: 'Em corrida' },
    { ate: 1.01, texto: 'Finalizando' }
  ];

  function moeda(v) {
    return 'R$ ' + v.toFixed(2).replace('.', ',');
  }

  function duracao(segundos) {
    if (!isFinite(segundos) || segundos <= 0) return '—';
    if (segundos < 60) return Math.round(segundos) + 's';
    if (segundos < 3600) return Math.round(segundos / 60) + 'min';
    return (segundos / 3600).toFixed(1) + 'h';
  }

  function gerarRota(semente) {
    var pontos = [];
    var lat = CENTRO.latitude + (((semente * 37) % 100) - 50) / 9000;
    var lng = CENTRO.longitude + (((semente * 61) % 100) - 50) / 9000;
    var direcao = (semente % 4) * (Math.PI / 2);

    pontos.push({ latitude: lat, longitude: lng });

    for (var i = 0; i < 7; i++) {
      var passo = 0.0022 + ((semente + i) % 5) * 0.0006;
      direcao += (((semente + i * 13) % 3) - 1) * (Math.PI / 2);
      lat += Math.sin(direcao) * passo;
      lng += Math.cos(direcao) * passo;
      pontos.push({ latitude: lat, longitude: lng });
    }

    return pontos;
  }

  function pontoNaRota(rota, t) {
    var total = rota.length - 1;
    var alvo = Math.min(Math.max(t, 0), 0.9999) * total;
    var i = Math.floor(alvo);
    var f = alvo - i;
    var a = rota[i];
    var b = rota[Math.min(i + 1, total)];

    return {
      latitude: a.latitude + (b.latitude - a.latitude) * f,
      longitude: a.longitude + (b.longitude - a.longitude) * f,
      heading: (Math.atan2(b.longitude - a.longitude, b.latitude - a.latitude) * 180) / Math.PI
    };
  }

  /* Estado do rádio. A qualidade do enlace passeia devagar; enlace ruim
   * retransmite mais, e a operadora tarifa byte de IP, não byte útil. */
  function criarRadio(semente) {
    var qualidade = 0.35 + ((semente * 17) % 60) / 100;
    var sombraRestante = 0;

    return {
      passo: function () {
        // Sombra de sinal: túnel, viaduto, prédio. Some depois de alguns segundos.
        if (sombraRestante > 0) {
          sombraRestante--;
        } else if (Math.random() < 0.06) {
          sombraRestante = 2 + Math.floor(Math.random() * 5);
        }

        qualidade += (Math.random() - 0.5) * 0.08;
        qualidade = Math.min(0.98, Math.max(0.12, qualidade));
      },
      rede: function () {
        var q = this.efetiva();
        return q > 0.72 ? '5G' : q > 0.34 ? '4G' : q > 0.18 ? '3G' : '—';
      },
      efetiva: function () {
        return sombraRestante > 0 ? qualidade * 0.35 : qualidade;
      },
      /* Sobrecarga de IP/TLS mais retransmissão. Enlace em sombra retransmite
       * muito mais, e a operadora tarifa byte de IP, não byte útil. */
      overhead: function () {
        return 1.06 + (1 - this.efetiva()) * 0.62;
      }
    };
  }

  function criar(opcoes) {
    var no = opcoes.no;
    var driver = opcoes.driver;

    var el = {
      canvas: no.querySelector('.mapa'),
      operadora: no.querySelector('[data-operadora]'),
      nome: no.querySelector('[data-nome]'),
      veiculo: no.querySelector('[data-veiculo]'),
      nota: no.querySelector('[data-nota]'),
      inicial: no.querySelector('[data-inicial]'),
      progresso: no.querySelector('[data-progresso]'),
      etapa: no.querySelector('[data-etapa]'),
      eta: no.querySelector('[data-eta]'),
      custo: no.querySelector('[data-custo]'),
      franquiaBarra: no.querySelector('[data-franquia-barra]'),
      franquia: no.querySelector('[data-franquia]'),
      esgota: no.querySelector('[data-esgota]'),
      caixa: no.querySelector('.consumo')
    };

    el.nome.textContent = driver.name;
    el.veiculo.textContent = driver.vehicle_model + ' · ' + driver.vehicle_plate;
    el.nota.textContent = Number(driver.rating).toFixed(1);
    el.inicial.textContent = driver.name.replace('Motorista ', 'M');

    var mapa = global.Mapa.criar(el.canvas);
    var rota = gerarRota(driver.id_driver);
    var radio = criarRadio(driver.id_driver);

    var estado = {
      driverId: driver.id_driver,
      progresso: 0,
      concluida: false,
      rodando: false,
      outros: [],
      inicioEm: 0,
      bytes: 0,          // bytes úteis observados no socket
      tarifado: 0,       // bytes tarifados pela operadora (com overhead do enlace)
      taxaTarifada: 0,
      ultimoTarifado: 0,
      custo: 0,
      franquiaPct: 100,
      socket: null,
      pingTimer: null
    };

    var p0 = pontoNaRota(rota, 0);
    estado.posicao = { driverId: driver.id_driver, latitude: p0.latitude, longitude: p0.longitude, heading: p0.heading };

    /* Contabiliza o payload recebido. Medimos o corpo do evento, que e o dado
     * util que o app consome. */
    function medir(payload) {
      var n = JSON.stringify(payload).length;

      estado.bytes += n;
      estado.tarifado += n * radio.overhead();
    }

    function conectar() {
      // Parte da frota roda em rede onde o websocket nao sobe.
      var transportes = driver.id_driver % 3 === 0 ? ['polling'] : ['websocket'];

      estado.socket = global.io({
        transports: transportes,
        query: {
          driverId: String(driver.id_driver),
          latitude: String(estado.posicao.latitude),
          longitude: String(estado.posicao.longitude)
        }
      });

      estado.socket.on('driver.positions', function (lista) {
        medir(lista);
        estado.outros = Array.isArray(lista) ? lista : [];
      });

      estado.pingTimer = setInterval(function () {
        if (!estado.socket || !estado.socket.connected) return;
        estado.socket.emit('driver.location', {
          driverId: driver.id_driver,
          latitude: estado.posicao.latitude,
          longitude: estado.posicao.longitude,
          heading: Math.round(estado.posicao.heading),
          speed: 34,
          accuracy: 9
        });
      }, PING_MS);
    }

    function desconectar() {
      if (estado.pingTimer) clearInterval(estado.pingTimer);
      estado.pingTimer = null;
      if (estado.socket) estado.socket.disconnect();
      estado.socket = null;
    }

    function iniciar() {
      estado.progresso = 0;
      estado.concluida = false;
      estado.rodando = true;
      estado.inicioEm = performance.now();
      estado.bytes = 0;
      estado.tarifado = 0;
      estado.ultimoTarifado = 0;
      estado.custo = 0;
      conectar();
    }

    function parar() {
      estado.rodando = false;
      desconectar();
    }

    /* Progresso vem do relógio, não da contagem de quadros: a aba pode estar
     * em segundo plano e o rAF é suspenso nesse caso. */
    function avancar() {
      if (!estado.rodando || estado.concluida) return;

      estado.progresso = Math.min(1, (performance.now() - estado.inicioEm) / (DURACAO_CORRIDA_S * 1000));

      var p = pontoNaRota(rota, estado.progresso);
      estado.posicao.latitude = p.latitude;
      estado.posicao.longitude = p.longitude;
      estado.posicao.heading = p.heading;

      if (estado.progresso >= 1) {
        estado.concluida = true;
        if (opcoes.aoConcluir) opcoes.aoConcluir(driver.id_driver);
      }
    }

    function quadro() {
      avancar();
      mapa.desenhar({ proprio: estado.posicao, outros: estado.outros, rota: rota });
    }

    /** Chamado ~1x/s pelo orquestrador, com o intervalo real desde o anterior. */
    function tick(decorridoMs) {
      var janelaS = Math.max(decorridoMs, 1) / 1000;

      avancar();
      radio.passo();
      el.operadora.textContent = radio.rede();

      estado.taxaTarifada = (estado.tarifado - estado.ultimoTarifado) / janelaS;
      estado.ultimoTarifado = estado.tarifado;

      // Consumo do turno: o relógio da bancada corre ESCALA vezes mais rápido.
      var consumoTurno = estado.tarifado * ESCALA;
      estado.custo = (consumoTurno / (1024 * 1024 * 1024)) * PRECO_POR_GB;

      var restante = Math.max(0, 1 - consumoTurno / FRANQUIA_DIARIA_BYTES);
      var pct = Math.round(restante * 100);
      estado.franquiaPct = pct;

      el.custo.textContent = moeda(estado.custo);
      el.franquiaBarra.style.width = pct + '%';
      el.franquia.textContent = 'franquia ' + pct + '%';

      var segundosParaEsgotar = estado.taxaTarifada > 0
        ? ((FRANQUIA_DIARIA_BYTES - consumoTurno) / (estado.taxaTarifada * ESCALA))
        : Infinity;

      if (!estado.rodando) el.esgota.textContent = '—';
      else if (pct === 0) el.esgota.textContent = 'esgotada';
      else el.esgota.textContent = 'esgota em ' + duracao(segundosParaEsgotar * ESCALA);

      el.caixa.setAttribute('data-nivel', pct < 20 ? 'critico' : pct < 55 ? 'alto' : 'normal');

      var etapa = ETAPAS.find(function (e) { return estado.progresso < e.ate; });
      el.progresso.style.width = Math.round(estado.progresso * 100) + '%';
      el.etapa.textContent = estado.concluida ? 'Corrida concluída' : (estado.rodando ? etapa.texto : 'Aguardando');
      el.eta.textContent = estado.concluida
        ? 'entregue'
        : (estado.rodando ? Math.max(0, Math.round(DURACAO_CORRIDA_S * (1 - estado.progresso))) + 's restantes' : '—');
    }

    quadro();

    return {
      driverId: driver.id_driver,
      estado: estado,
      iniciar: iniciar,
      parar: parar,
      quadro: quadro,
      tick: tick
    };
  }

  global.Telefone = { criar: criar, moeda: moeda, ESCALA: ESCALA };
})(window);
