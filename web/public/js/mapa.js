/* Renderizador do mapa do aparelho.
 * Malha viária sintética — não depende de tiles externos, o teste roda offline. */
(function (global) {
  'use strict';

  var SPAN_LNG = 0.017;      // recorte horizontal, em graus
  var PASSO_VIA = 0.0016;    // distância entre vias
  var CORES = {
    quadra: '#151d27',
    via: '#2b3847',
    viaPrincipal: '#36465a',
    rota: '#2f6ef0',
    proprio: '#35d07f',
    outro: '#6b7f96'
  };

  function criar(canvas) {
    var ctx = canvas.getContext('2d');
    var largura = 0;
    var altura = 0;

    function ajustar() {
      var dpr = global.devicePixelRatio || 1;
      var lCss = canvas.clientWidth || 252;
      var aCss = canvas.clientHeight || 392;

      if (canvas.width !== Math.round(lCss * dpr)) {
        canvas.width = Math.round(lCss * dpr);
        canvas.height = Math.round(aCss * dpr);
      }

      largura = lCss;
      altura = aCss;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function escala() {
      return largura / SPAN_LNG;
    }

    function projetar(centro, ponto) {
      var e = escala();
      return {
        x: (ponto.longitude - centro.longitude) * e + largura / 2,
        y: -(ponto.latitude - centro.latitude) * e + altura / 2
      };
    }

    function desenharMalha(centro) {
      var e = escala();
      var spanLat = altura / e;

      ctx.fillStyle = CORES.quadra;
      ctx.fillRect(0, 0, largura, altura);

      var primeiroLng = Math.floor((centro.longitude - SPAN_LNG / 2) / PASSO_VIA) * PASSO_VIA;
      var indice = Math.round(primeiroLng / PASSO_VIA);

      for (var lng = primeiroLng; lng < centro.longitude + SPAN_LNG / 2; lng += PASSO_VIA, indice++) {
        var x = (lng - centro.longitude) * e + largura / 2;
        var principal = indice % 4 === 0;
        ctx.strokeStyle = principal ? CORES.viaPrincipal : CORES.via;
        ctx.lineWidth = principal ? 7 : 4;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, altura);
        ctx.stroke();
      }

      var primeiroLat = Math.floor((centro.latitude - spanLat / 2) / PASSO_VIA) * PASSO_VIA;
      indice = Math.round(primeiroLat / PASSO_VIA);

      for (var lat = primeiroLat; lat < centro.latitude + spanLat / 2; lat += PASSO_VIA, indice++) {
        var y = -(lat - centro.latitude) * e + altura / 2;
        var eixo = indice % 5 === 0;
        ctx.strokeStyle = eixo ? CORES.viaPrincipal : CORES.via;
        ctx.lineWidth = eixo ? 7 : 4;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(largura, y);
        ctx.stroke();
      }
    }

    function desenharRota(centro, rota) {
      if (!rota || rota.length < 2) return;

      ctx.strokeStyle = CORES.rota;
      ctx.lineWidth = 4;
      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';
      ctx.globalAlpha = 0.9;
      ctx.beginPath();

      for (var i = 0; i < rota.length; i++) {
        var p = projetar(centro, rota[i]);
        if (i === 0) ctx.moveTo(p.x, p.y);
        else ctx.lineTo(p.x, p.y);
      }

      ctx.stroke();
      ctx.globalAlpha = 1;
    }

    function desenharCarro(pos, cor, tamanho, heading) {
      ctx.save();
      ctx.translate(pos.x, pos.y);
      ctx.rotate(((heading || 0) * Math.PI) / 180);

      ctx.fillStyle = cor;
      ctx.beginPath();
      var l = tamanho;
      var a = tamanho * 1.9;
      ctx.roundRect(-l / 2, -a / 2, l, a, 2.5);
      ctx.fill();

      ctx.restore();
    }

    function desenhar(estado) {
      ajustar();

      var centro = estado.proprio;
      desenharMalha(centro);
      desenharRota(centro, estado.rota);

      var outros = estado.outros || [];
      for (var i = 0; i < outros.length; i++) {
        var o = outros[i];
        if (o.driverId === estado.proprio.driverId) continue;
        var p = projetar(centro, o);
        if (p.x < -20 || p.x > largura + 20 || p.y < -20 || p.y > altura + 20) continue;
        desenharCarro(p, CORES.outro, 6, o.heading);
      }

      var meu = projetar(centro, centro);
      ctx.fillStyle = 'rgba(53, 208, 127, .16)';
      ctx.beginPath();
      ctx.arc(meu.x, meu.y, 17, 0, Math.PI * 2);
      ctx.fill();
      desenharCarro(meu, CORES.proprio, 9, centro.heading);
    }

    return { desenhar: desenhar };
  }

  global.Mapa = { criar: criar };
})(window);
