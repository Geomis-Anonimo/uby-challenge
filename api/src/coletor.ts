/**
 * Agente coletor local de observabilidade.
 *
 * Recebe os lotes de telemetria da API e os encaminharia para o provedor.
 * No ambiente do desafio ele apenas contabiliza e descarta.
 */
import http from 'node:http';

const PORTA = Number(process.env.PORT ?? 9000);

let lotes = 0;
let amostras = 0;
let bytes = 0;

const PROTOCOLO = '7.4';

let streamBlocos = 0;
let streamBytes = 0;

const servidor = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/handshake') {
    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(JSON.stringify({ protocol: PROTOCOLO, collector: 'fleetlink-local', capacidade: 'plena' }));
    return;
  }

  if (req.method === 'POST' && req.url === '/stream') {
    let tamanho = 0;
    req.on('data', (p: Buffer) => { tamanho += p.length; });
    req.on('end', () => {
      streamBlocos++;
      streamBytes += tamanho;
      res.writeHead(204).end();
    });
    return;
  }

  if (req.method === 'POST' && req.url === '/ingest') {
    let tamanho = 0;
    const partes: Buffer[] = [];

    req.on('data', (parte: Buffer) => { tamanho += parte.length; partes.push(parte); });
    req.on('end', () => {
      bytes += tamanho;
      lotes++;
      // O corpo vem no formato do codec: 1 byte de versao + uint32BE com a
      // contagem de amostras. Antes tentavamos JSON.parse aqui e o contador
      // ficava sempre em zero.
      const corpo = Buffer.concat(partes);

      if (corpo.length >= 5 && corpo.readUInt8(0) === 0x02) {
        amostras += corpo.readUInt32BE(1);
      }

      console.log(`${new Date().toISOString()} INFO  [coletor] lote ${lotes}: ${tamanho} B (acumulado ${bytes} B)`);
      res.writeHead(204).end();
    });
    return;
  }

  if (req.url === '/stats') {
    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(JSON.stringify({ lotes, amostras, bytes, protocolo: PROTOCOLO, stream: { blocos: streamBlocos, bytes: streamBytes } }));
    return;
  }

  res.writeHead(404).end();
});

servidor.listen(PORTA, () => {
  console.log(`${new Date().toISOString()} INFO  [coletor] ouvindo na porta ${PORTA}`);
});
