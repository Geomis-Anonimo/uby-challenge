import mysql from 'mysql2/promise';
import { config } from '../config.js';
import { Logger } from './logger.js';

const logger = new Logger('MySQL');

let pool: mysql.Pool | null = null;

export async function conectarMysql(): Promise<mysql.Pool> {
  if (pool) return pool;

  pool = mysql.createPool({
    host: config.mysql.host,
    port: config.mysql.port,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
    waitForConnections: true,
    connectionLimit: config.mysql.connectionLimit,
    dateStrings: true,
  });

  await pool.query('SELECT 1');
  logger.info(`conectado em ${config.mysql.host}:${config.mysql.port}/${config.mysql.database}`);

  return pool;
}

export function db(): mysql.Pool {
  if (!pool) throw new Error('MySQL nao inicializado');
  return pool;
}

/** Executa e mede. Consultas acima de 300ms sobem para warn. */
export async function consultar<T = any>(sql: string, params: any[] = []): Promise<T[]> {
  const inicio = performance.now();
  const [linhas] = await db().query(sql, params);
  const ms = performance.now() - inicio;

  if (ms > 300) logger.warn(`consulta lenta (${ms.toFixed(0)}ms)`, sql.replace(/\s+/g, ' ').slice(0, 120));
  else logger.debug(`consulta ${ms.toFixed(1)}ms`);

  return linhas as T[];
}
