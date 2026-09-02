import type { Socket } from 'socket.io';
import { Logger } from '../../infra/logger.js';

/**
 * Convencao de salas do gateway.
 *
 *   user:<id>    -> app do passageiro
 *   driver:<id>  -> app do motorista
 *   city:<id>    -> painel de operacao da cidade
 *   trip:<ref>   -> acompanhamento de uma corrida especifica
 */
export const Sala = {
  usuario: (id: number | string) => `user:${id}`,
  motorista: (id: number | string) => `driver:${id}`,
  cidade: (id: number | string) => `city:${id}`,
  corrida: (ref: string) => `trip:${ref}`,
};

export class EventsRoomService {
  private readonly logger = new Logger('EventsRoom');

  entrar(client: Socket, sala: string): void {
    client.join(sala);
    this.logger.debug(`${client.id} entrou em ${sala}`);
  }

  sair(client: Socket, sala: string): void {
    client.leave(sala);
    this.logger.debug(`${client.id} saiu de ${sala}`);
  }

  sairDeTodas(client: Socket): void {
    for (const sala of client.rooms) {
      if (sala !== client.id) client.leave(sala);
    }
  }
}
