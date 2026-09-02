import { Logger } from '../../infra/logger.js';
import { redis } from '../../infra/redis.js';

const PREFIXO = 'geo:reverso:';
const TTL = 86400;

/**
 * Geocodificação reversa.
 *
 * O provedor contratado tem instabilidade conhecida no fim da tarde, então o
 * cliente insiste até conseguir. Resultado positivo vai para o cache por 24h.
 */
export class GeocodingService {
  private readonly logger = new Logger('Geocoding');
  private readonly tentativasMax = 8;

  async reverso(latitude: number, longitude: number): Promise<string> {
    const chave = `${PREFIXO}${latitude.toFixed(4)}:${longitude.toFixed(4)}`;

    const emCache = await redis().get(chave);
    if (emCache) return emCache;

    let ultimoErro: unknown = null;

    for (let tentativa = 1; tentativa <= this.tentativasMax; tentativa++) {
      try {
        const endereco = await this.consultarProvedor(latitude, longitude);
        await redis().set(chave, endereco, { EX: TTL });
        return endereco;
      } catch (erro) {
        ultimoErro = erro;
        this.logger.warn(`provedor falhou (tentativa ${tentativa}/${this.tentativasMax})`);
      }
    }

    this.logger.error('geocodificação esgotou as tentativas', ultimoErro);
    return 'Endereço não identificado';
  }

  /** Stub do provedor externo. Falha de forma intermitente, como o real. */
  private async consultarProvedor(latitude: number, longitude: number): Promise<string> {
    await new Promise((r) => setTimeout(r, 12 + Math.random() * 25));

    if (Math.random() < 0.45) {
      throw new Error('502 do provedor de geocodificação');
    }

    const rua = 1 + Math.abs(Math.round(latitude * 10000)) % 300;
    const numero = 100 + Math.abs(Math.round(longitude * 10000)) % 900;
    return `Rua ${rua}, ${numero} - Muzambinho/MG`;
  }
}
