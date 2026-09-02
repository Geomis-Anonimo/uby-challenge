import { consultar } from '../../infra/mysql.js';

export interface CorridaRow {
  id_trip: number;
  reference: string;
  user_id: number;
  driver_id: number | null;
  city_id: number;
  status: string;
  payment_method: string;
  origin_address: string;
  dest_address: string;
  distance_m: number;
  duration_s: number;
  price: string;
  canceled_by: string | null;
  created_at: string;
  finished_at: string | null;
}

export class TripRepository {
  async listarPorCidade(cityId: number, limite: number): Promise<CorridaRow[]> {
    return consultar<CorridaRow>(
      `SELECT * FROM trips
        WHERE city_id = ?
        ORDER BY created_at DESC
        LIMIT ?`,
      [cityId, limite],
    );
  }

  async buscarPorReferencia(referencia: string): Promise<CorridaRow | null> {
    const linhas = await consultar<CorridaRow>(
      'SELECT * FROM trips WHERE reference = ? LIMIT 1',
      [referencia],
    );
    return linhas[0] ?? null;
  }

  async listarPorMotorista(driverId: number, limite: number): Promise<CorridaRow[]> {
    return consultar<CorridaRow>(
      `SELECT * FROM trips
        WHERE driver_id = ? AND status = 'finished'
        ORDER BY created_at DESC
        LIMIT ?`,
      [driverId, limite],
    );
  }

  async resumoDoDia(cityId: number): Promise<any> {
    const linhas = await consultar(
      `SELECT COUNT(*) AS total,
              SUM(CASE WHEN status = 'finished' THEN 1 ELSE 0 END) AS finalizadas,
              SUM(CASE WHEN canceled_by IS NOT NULL THEN 1 ELSE 0 END) AS canceladas,
              COALESCE(SUM(price), 0) AS faturamento
         FROM trips
        WHERE city_id = ?
          AND created_at >= DATE_SUB(NOW(), INTERVAL 1 DAY)`,
      [cityId],
    );
    return linhas[0];
  }

  async buscarMotorista(driverId: number): Promise<any> {
    const linhas = await consultar(
      'SELECT id_driver, name, phone, rating, vehicle_plate, vehicle_model, vehicle_color FROM drivers WHERE id_driver = ?',
      [driverId],
    );
    return linhas[0] ?? null;
  }

  async buscarUsuario(userId: number): Promise<any> {
    const linhas = await consultar(
      'SELECT id_user, name, phone, rating FROM users WHERE id_user = ?',
      [userId],
    );
    return linhas[0] ?? null;
  }

  async eventosDaCorrida(tripId: number): Promise<any[]> {
    return consultar(
      'SELECT event_type, payload, created_at FROM trip_events WHERE trip_id = ? ORDER BY created_at',
      [tripId],
    );
  }
}
