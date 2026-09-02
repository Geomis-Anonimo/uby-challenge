/**
 * Gerador de carga da malha de motoristas.
 *
 * Sobe como processo separado e fala com a API pelo mesmo caminho que o app do
 * motorista usa: handshake com driverId e ping periodico de `driver.location`.
 * Nao importa nada de dentro da API de proposito -- se divergir do app real,
 * o teste deixa de valer.
 */
import { io, type Socket } from 'socket.io-client';

const API_URL = process.env.API_URL ?? 'http://localhost:3000';
const PING_MS = Number(process.env.FLEET_PING_MS ?? 1000);
const TAMANHO = Number(process.env.FLEET_SIZE ?? 30);
const CIDADE = Number(process.env.FLEET_CITY ?? 1);

/** Os primeiros ids da cidade ficam para os aparelhos reais da bancada. */
const RESERVADOS = Number(process.env.FLEET_RESERVED ?? 6);

/** Fracao da frota que opera nas outras pracas. */
const DISPERSAO = Number(process.env.FLEET_SPREAD ?? 0.35);

/** A operadora derruba sessao ociosa; o app reconecta sozinho. */
const RECICLAGEM_MS = Number(process.env.FLEET_RECYCLE_MS ?? 90000);

const CENTRO = { lat: -21.3767, lng: -46.5253 };

interface MotoristaSimulado {
  driverId: number;
  socket: Socket;
  angulo: number;
  raio: number;
  velocidade: number;
}

const frota: MotoristaSimulado[] = [];
let cicloPing: NodeJS.Timeout | null = null;
let cicloReciclagem: NodeJS.Timeout | null = null;

function log(msg: string) {
  console.log(`${new Date().toISOString()} INFO  [frota] ${msg}`);
}

function posicaoDe(m: MotoristaSimulado) {
  return {
    latitude: CENTRO.lat + Math.sin(m.angulo) * m.raio,
    longitude: CENTRO.lng + Math.cos(m.angulo) * m.raio,
    heading: Math.round(((m.angulo * 180) / Math.PI + 90) % 360),
    speed: Math.round(m.velocidade * 3600),
    accuracy: 8 + Math.round(Math.random() * 10),
  };
}

async function idsDaCidade(cidade: number, pular: number, quantos: number): Promise<number[]> {
  const resposta = await fetch(`${API_URL}/drivers?cityId=${cidade}&limit=${pular + quantos}`);
  const corpo = (await resposta.json()) as { drivers: Array<{ id_driver: number }> };
  return corpo.drivers.map((d) => d.id_driver).slice(pular, pular + quantos);
}

async function idsDisponiveis(): Promise<number[]> {
  const fora = Math.round(TAMANHO * DISPERSAO);
  const local = TAMANHO - fora;

  const ids = await idsDaCidade(CIDADE, RESERVADOS, local);

  // As pracas vizinhas rodam na mesma instancia.
  const outras = [2, 3];
  for (let i = 0; i < fora; i++) {
    const [id] = await idsDaCidade(outras[i % outras.length], Math.floor(i / outras.length), 1);
    if (id) ids.push(id);
  }

  return ids;
}

function conectarFrota(ids: number[]) {
  for (let i = 0; i < ids.length; i++) {
    const driverId = ids[i];
    const angulo = (i / ids.length) * Math.PI * 2;
    const raio = 0.008 + (i % 5) * 0.004;

    const parcial: MotoristaSimulado = {
      driverId,
      angulo,
      raio,
      velocidade: 0.00004 + (i % 7) * 0.00001,
      socket: null as unknown as Socket,
    };

    parcial.socket = io(API_URL, {
      transports: ['websocket'],
      query: {
        driverId: String(driverId),
        latitude: String(posicaoDe(parcial).latitude),
        longitude: String(posicaoDe(parcial).longitude),
      },
    });

    frota.push(parcial);
  }

  log(`${ids.length} motoristas conectados na cidade ${CIDADE}`);
}

function desconectarFrota() {
  for (const m of frota) m.socket?.disconnect();
  frota.length = 0;
  log('frota desconectada');
}

function iniciarReciclagem() {
  cicloReciclagem = setInterval(() => {
    const alvo = frota[Math.floor(Math.random() * frota.length)];
    if (!alvo?.socket) return;

    alvo.socket.disconnect();
    alvo.socket.connect();
  }, Math.max(1000, RECICLAGEM_MS / Math.max(frota.length, 1)));
}

function iniciarPings() {
  cicloPing = setInterval(() => {
    for (const m of frota) {
      m.angulo += m.velocidade * 40;
      if (!m.socket.connected) continue;
      m.socket.emit('driver.location', { driverId: m.driverId, ...posicaoDe(m) });
    }
  }, PING_MS);
}

function pararPings() {
  if (cicloPing) clearInterval(cicloPing);
  cicloPing = null;
  if (cicloReciclagem) clearInterval(cicloReciclagem);
  cicloReciclagem = null;
}

async function estadoDaSimulacao(): Promise<boolean> {
  try {
    const resposta = await fetch(`${API_URL}/simulacao/estado`);
    if (!resposta.ok) return false;
    const corpo = (await resposta.json()) as { ativo: boolean };
    return Boolean(corpo.ativo);
  } catch {
    return false;
  }
}

async function principal() {
  log(`aguardando API em ${API_URL}`);

  let rodando = false;

  setInterval(async () => {
    const deveRodar = await estadoDaSimulacao();

    if (deveRodar && !rodando) {
      rodando = true;
      const ids = await idsDisponiveis();
      conectarFrota(ids);
      iniciarPings();
      iniciarReciclagem();
    } else if (!deveRodar && rodando) {
      rodando = false;
      pararPings();
      desconectarFrota();
    }
  }, 1000);
}

principal();
