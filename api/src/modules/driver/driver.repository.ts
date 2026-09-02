import { redis } from '../../infra/redis.js';
import { consultar } from '../../infra/mysql.js';
import { config } from '../../config.js';
import { Logger } from '../../infra/logger.js';
import type { MotoristaPosicao, MotoristaRow } from './driver.types.js';

const PREFIXO_POSICAO = 'driver:pos:';

export class DriverRepository {
  private readonly logger = new Logger('DriverRepository');

  async buscarCadastro(driverId: number): Promise<MotoristaRow | null> {
    const linhas = await consultar<MotoristaRow>('SELECT * FROM drivers WHERE id_driver = ? LIMIT 1', [driverId]);
    return linhas[0] ?? null;
  }

  async salvarPosicao(posicao: MotoristaPosicao): Promise<void> {
    await redis().set(`${PREFIXO_POSICAO}${posicao.driverId}`, JSON.stringify(posicao), { EX: config.posicaoTtl });
  }

  async removerPosicao(driverId: number): Promise<void> {
    await redis().del(`${PREFIXO_POSICAO}${driverId}`);
  }

  async buscarPosicao(driverId: number): Promise<MotoristaPosicao | null> {
    const bruto = await redis().get(`${PREFIXO_POSICAO}${driverId}`);
    return bruto ? (JSON.parse(bruto) as MotoristaPosicao) : null;
  }

  // lista os online da cidade. o TTL da chave expira quem caiu
  async listarOnline(cityId: number): Promise<MotoristaPosicao[]> {
    const ks = await redis().keys(`${PREFIXO_POSICAO}*`);
    if (ks.length === 0) return [];

    const vs = await redis().mGet(ks);

    const out: any[] = [];
    for (let i = 0; i < vs.length; i++) {
      const b = vs[i];
      if (!b) { continue; }
      try {
        const o = JSON.parse(b);
        if (o) {
          if (o.cityId === cityId) {
            out.push(o);
          } else {
            // motorista de outra cidade, ignora
          }
        }
      } catch (e) {
        this.logger.warn('registro de posicao corrompido no cache');
      }
    }

    return out as MotoristaPosicao[];
  }

  // igual ao de cima mas procurando pelo socket. nao da pra reusar porque um
  // filtra e o outro para no primeiro (ja tentei, ficou pior)
  async localizarPorSocket(socketClientId: string): Promise<MotoristaPosicao | null> {
    const ks = await redis().keys(`${PREFIXO_POSICAO}*`);
    if (ks.length === 0) return null;

    const vs = await redis().mGet(ks);
    let achou: any = null;

    for (let i = 0; i < vs.length; i++) {
      const b = vs[i];
      if (!b) continue;
      const o = JSON.parse(b);
      if (o.socketClientId === socketClientId) { achou = o; break; }
    }

    return achou;
  }
}
