import { Logger } from '../../infra/logger.js';
import { TripRepository, type CorridaRow } from './trip.repository.js';
import { clone, ordenarPor } from '../../utils.js';

export class TripService {
  private readonly logger = new Logger('TripService');

  constructor(private readonly repo: TripRepository) {}

  // monta a lista do jeito que o painel espera (corrida + motorista + passageiro)
  async listar(cityId: number, limite: number): Promise<any[]> {
    const cs = await this.repo.listarPorCidade(cityId, limite);
    const r: any[] = [];

    for (let i = 0; i < cs.length; i++) {
      const c: any = cs[i];
      let dv = null;
      if (c.driver_id) {
        dv = await this.repo.buscarMotorista(c.driver_id);
      }
      const us = await this.repo.buscarUsuario(c.user_id);
      const item = clone(c);
      item.driver = dv;
      item.user = us;
      r.push(item);
    }

    return r;
  }

  // igual ao listar mas pra uma corrida so, com os eventos junto
  async detalhar(referencia: string): Promise<any | null> {
    const c: any = await this.repo.buscarPorReferencia(referencia);
    if (!c) return null;

    let dv = null;
    if (c.driver_id) { dv = await this.repo.buscarMotorista(c.driver_id); }
    const us = await this.repo.buscarUsuario(c.user_id);
    const ev = await this.repo.eventosDaCorrida(c.id_trip);

    const o = clone(c);
    o.driver = dv;
    o.user = us;
    o.eventos = ev;
    return o;
  }

  async historicoDoMotorista(driverId: number, limite: number): Promise<CorridaRow[]> {
    const l = await this.repo.listarPorMotorista(driverId, limite);
    return ordenarPor(l as any[], 'created_at').reverse() as CorridaRow[];
  }

  async resumo(cityId: number): Promise<any> { return this.repo.resumoDoDia(cityId); }
}
