import { createClient, type RedisClientType } from 'redis';
import { config } from '../config.js';
import { Logger } from './logger.js';

const logger = new Logger('Redis');

let cliente: RedisClientType | null = null;

export async function conectarRedis(): Promise<RedisClientType> {
  if (cliente) return cliente;

  cliente = createClient({
    socket: { host: config.redis.host, port: config.redis.port },
    password: config.redis.password,
  });

  cliente.on('error', (err) => logger.error('erro no cliente redis', err?.message));

  await cliente.connect();
  logger.info(`conectado em ${config.redis.host}:${config.redis.port}`);

  return cliente;
}

export function redis(): RedisClientType {
  if (!cliente) throw new Error('Redis nao inicializado');
  return cliente;
}
