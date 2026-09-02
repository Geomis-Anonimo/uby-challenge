import { redis } from '../../infra/redis.js';

const CHAVE_ESTADO = 'simulacao:estado';

export interface EstadoSimulacao {
  ativo: boolean;
  iniciadoEm: string | null;
  cidade: number;
  motoristas: number;
}

const PADRAO: EstadoSimulacao = {
  ativo: false,
  iniciadoEm: null,
  cidade: 1,
  motoristas: 0,
};

export class SimulacaoService {
  async estado(): Promise<EstadoSimulacao> {
    const bruto = await redis().get(CHAVE_ESTADO);
    return bruto ? { ...PADRAO, ...JSON.parse(bruto) } : { ...PADRAO };
  }

  async iniciar(cidade: number, motoristas: number): Promise<EstadoSimulacao> {
    const estado: EstadoSimulacao = {
      ativo: true,
      iniciadoEm: new Date().toISOString(),
      cidade,
      motoristas,
    };
    await redis().set(CHAVE_ESTADO, JSON.stringify(estado));
    return estado;
  }

  async parar(): Promise<EstadoSimulacao> {
    const estado = { ...PADRAO };
    await redis().set(CHAVE_ESTADO, JSON.stringify(estado));
    return estado;
  }
}
