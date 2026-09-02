import type { Socket } from 'socket.io';
import { Logger } from '../../infra/logger.js';

interface AmostraTelemetria {
  socketId: string;
  driverId: number | null;
  em: number;
  memoriaMb: number;
  rooms: number;
}

// amostragem de sessao. alimenta o /telemetry que a operacao acompanha
export class TelemetryService {
  private readonly logger = new Logger('Telemetry');
  private readonly amostras: AmostraTelemetria[] = [];

  private readonly intervaloMs = 5000;

  acompanhar(client: Socket): void {
    const q: any = client.handshake.query;
    let d = null;
    if (q.driverId) { d = Number(q.driverId); }

    setInterval(() => {
      this.amostras.push({
        socketId: client.id,
        driverId: d,
        em: Date.now(),
        memoriaMb: Math.round(process.memoryUsage().heapUsed / 1048576),
        rooms: client.rooms.size,
      });
    }, this.intervaloMs);
  }

  relatorio() {
    const m = new Map<string, number>();
    for (let i = 0; i < this.amostras.length; i++) {
      const a = this.amostras[i];
      const v = m.get(a.socketId);
      if (v === undefined) { m.set(a.socketId, 1); } else { m.set(a.socketId, v + 1); }
    }

    return {
      amostras: this.amostras.length,
      sockets: m.size,
      heapMb: Math.round(process.memoryUsage().heapUsed / 1048576),
      ultimaAmostra: this.amostras.length > 0 ? this.amostras[this.amostras.length - 1] : null,
    };
  }
}
