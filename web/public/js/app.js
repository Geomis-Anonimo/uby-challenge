/* Orquestra a bancada: monta os aparelhos, roda o laço de animação e agrega métricas. */
(function (global) {
  'use strict';

  var CIDADE = 1;
  var APARELHOS = 6;

  var grade = document.getElementById('grade');
  var tpl = document.getElementById('tpl-telefone');
  var botao = document.getElementById('btn-teste');
  var aviso = document.getElementById('aviso');

  var mTempo = document.getElementById('m-tempo');
  var mCorridas = document.getElementById('m-corridas');
  var mCusto = document.getElementById('m-custo');
  var mFranquia = document.getElementById('m-franquia');
  var mEscala = document.getElementById('m-escala');

  var telefones = [];
  var rodando = false;
  var inicioEm = 0;
  var concluidas = 0;

  function formatarTempo(ms) {
    var s = Math.floor(ms / 1000);
    return String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');
  }

  async function carregarMotoristas() {
    var resposta = await fetch('/api/drivers?cityId=' + CIDADE + '&limit=' + APARELHOS);
    var corpo = await resposta.json();
    return corpo.drivers.slice(0, APARELHOS);
  }

  function montar(drivers) {
    drivers.forEach(function (driver) {
      var no = tpl.content.firstElementChild.cloneNode(true);
      grade.appendChild(no);

      telefones.push(global.Telefone.criar({
        no: no,
        driver: driver,
        aoConcluir: function () {
          concluidas++;
          if (concluidas >= telefones.length) finalizar();
        }
      }));
    });

    mCorridas.textContent = '0 / ' + telefones.length;
    mEscala.textContent = '×' + global.Telefone.ESCALA;
  }

  function laco() {
    for (var i = 0; i < telefones.length; i++) telefones[i].quadro();
    requestAnimationFrame(laco);
  }

  var ultimoTick = 0;

  function agregar() {
    var agora = performance.now();
    var decorridoMs = ultimoTick ? agora - ultimoTick : 1000;
    ultimoTick = agora;

    var custo = 0;
    var franquia = 0;

    for (var i = 0; i < telefones.length; i++) {
      telefones[i].tick(decorridoMs);
      custo += telefones[i].estado.custo;
      franquia += telefones[i].estado.franquiaPct;
    }

    franquia = telefones.length ? Math.round(franquia / telefones.length) : 100;

    mCusto.textContent = global.Telefone.moeda(custo);
    mFranquia.textContent = franquia + '%';
    mCorridas.textContent = concluidas + ' / ' + telefones.length;

    if (rodando) mTempo.textContent = formatarTempo(Date.now() - inicioEm);
  }

  async function iniciar() {
    concluidas = 0;
    inicioEm = Date.now();
    rodando = true;

    botao.textContent = 'Parar teste';
    botao.setAttribute('data-rodando', 'true');
    aviso.textContent = 'Teste em andamento. Os aparelhos estão conectados à malha de tempo real.';

    await fetch('/api/simulacao/iniciar', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ cidade: CIDADE })
    });

    telefones.forEach(function (t) { t.iniciar(); });
  }

  async function parar() {
    rodando = false;

    botao.textContent = 'Iniciar teste';
    botao.removeAttribute('data-rodando');

    telefones.forEach(function (t) { t.parar(); });
    await fetch('/api/simulacao/parar', { method: 'POST' });
  }

  function finalizar() {
    var duracao = formatarTempo(Date.now() - inicioEm);
    var custo = telefones.reduce(function (s, t) { return s + t.estado.custo; }, 0);
    var franquia = Math.round(
      telefones.reduce(function (s, t) { return s + t.estado.franquiaPct; }, 0) / telefones.length
    );

    aviso.textContent = 'Teste concluído em ' + duracao + '. Custo agregado de ' +
      global.Telefone.moeda(custo) + ' em ' + telefones.length + ' aparelhos. ' +
      'Franquia média restante: ' + franquia + '%.';

    parar();
  }

  botao.addEventListener('click', function () {
    if (rodando) parar();
    else iniciar();
  });

  carregarMotoristas()
    .then(function (drivers) {
      if (!drivers.length) {
        aviso.textContent = 'Nenhum motorista disponível na cidade ' + CIDADE + '.';
        botao.disabled = true;
        return;
      }
      montar(drivers);
      requestAnimationFrame(laco);
      setInterval(agregar, 1000);
    })
    .catch(function (erro) {
      aviso.textContent = 'Falha ao carregar a bancada: ' + erro.message;
      botao.disabled = true;
    });
})(window);
