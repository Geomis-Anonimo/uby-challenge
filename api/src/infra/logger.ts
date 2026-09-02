import { config } from '../config.js';

const NIVEIS = { debug: 10, info: 20, warn: 30, error: 40 } as const;
type Nivel = keyof typeof NIVEIS;

const minimo = NIVEIS[(config.logLevel as Nivel)] ?? NIVEIS.info;

function escrever(nivel: Nivel, contexto: string, msg: string, extra?: unknown) {
  if (NIVEIS[nivel] < minimo) return;
  const linha = `${new Date().toISOString()} ${nivel.toUpperCase().padEnd(5)} [${contexto}] ${msg}`;
  if (extra !== undefined) console.log(linha, extra);
  else console.log(linha);
}

export class Logger {
  constructor(private readonly contexto: string) {}

  debug(msg: string, extra?: unknown) { escrever('debug', this.contexto, msg, extra); }
  info(msg: string, extra?: unknown)  { escrever('info', this.contexto, msg, extra); }
  warn(msg: string, extra?: unknown)  { escrever('warn', this.contexto, msg, extra); }
  error(msg: string, extra?: unknown) { escrever('error', this.contexto, msg, extra); }
}
