# Chamado #4471 — o app do motorista comendo o pacote de dados

## O que estava acontecendo

A cada posição de GPS que **qualquer** motorista manda (de 2 em 2 segundos), o
servidor montava a lista de **todos** os motoristas online da cidade e mandava
essa lista inteira para **todos os aparelhos conectados** (`io.emit`). Quanto
maior a frota, pior: N pings por ciclo × lista com N motoristas × N destinatários
— o tráfego cresce ao quadrado. Na prática cada celular baixa a frota inteira
umas 10 vezes por segundo, e cada item ainda carrega o cadastro completo do
motorista (nome, e-mail, CPF, telefone, conta bancária) que o app nem usa.

Tinha um segundo ponto com o mesmo defeito: o `PainelService` mandava as 150
corridas mais recentes (`SELECT *`, linha inteira) para todos os sockets, de 2 em
2 segundos — e **nenhum cliente escuta esse evento** (`city.summary`), mas como é
só um recorte do código completo nem mexi nisso.

O coletor de telemetria (a "linha de saída do provedor") movimenta ~19 KB no
total — não é ele. O peso está no que o servidor empurra pelos sockets.

## Como cheguei nisso

1. Abri a Tela (`http://localhost:8080`), cliquei em **Iniciar teste**. A
   barra de franquia de cada aparelho derretia; o "esgota em" dava poucos minutos
   de turno.
2. **DevTools → Network → filtro `socket.io`.** Os 6 aparelhos da bancada usam
   long-polling e o [telefone.js](web/public/js/telefone.js) força `polling`
   nesse caso), então não tem aba "Messages" do websocket,o conteúdo está no
   corpo das respostas `...&transport=polling&sid=...`, que se repetem várias
   vezes por segundo. Abrindo uma: `42["driver.positions",[ ...frota inteira... ]]`,
   ~7 KB cada; e `42["city.summary",{...}]`, ~70 KB, de 2 em 2s.
4. **`docker stats`** com o teste rodando: o container `frota` (que fala com a
   API do mesmo jeito que o app real) recebe muito mais do que envia — sobe um
   ponto de GPS, recebe a cidade inteira de volta.
5. Medi com um script — ver [Como reproduzir a medição](#como-reproduzir-a-medição).
6. Busquei `driver.positions` no projeto (`grep -rn` ou Ctrl+Shift+F no VSCode):
   só sai de `EventsEmitter.emitEvent` (que é `io.emit`), chamado em
   `aoReceberPosicao` — o handler do evento `driver.location`, que roda a cada ping.
7. Confirmei ligando/desligando: com `POSICOES_BROADCAST_MS=0` o servidor volta a
   emitir a cada ping e o consumo volta para ~8 GB/dia. Mesmo binário, só o env.

## O que mudei

### 1. `driver.positions` sai no máximo 1x a cada `POSICOES_BROADCAST_MS`, por cidade

[api/src/modules/events/events.gateway.ts](api/src/modules/events/events.gateway.ts)

Em vez de emitir a lista a cada ping, o gateway guarda o horário do último envio
por cidade e só reenvia quando a janela passou. É o mesmo padrão de intervalo
fixo que o `PainelService` já usava. O mesmo guard entrou no `aoDesconectar`, que
também disparava um broadcast completo a cada saída de motorista (a frota recicla
conexão a cada poucos segundos).

```ts
private readonly broadcastMs = Number(process.env.POSICOES_BROADCAST_MS ?? 1000);
private readonly ultimoBroadcast = new Map<number, number>();   // cityId -> timestamp

// no aoReceberPosicao, no lugar do emit direto:
const agora = Date.now();
if (agora - (this.ultimoBroadcast.get(pos.cityId) ?? 0) >= this.broadcastMs) {
  this.ultimoBroadcast.set(pos.cityId, agora);
  await this.emitter.emitDriverLocations(pos.cityId);
}
```

`POSICOES_BROADCAST_MS: 500` no [docker-compose.yml](docker-compose.yml).

## O efeito

Medido com 20 motoristas de fundo, 1 aparelho só recebendo, 20s:

| | consumo por aparelho |
|---|---|
| antes | ~102 KiB/s → **~8,4 GB/dia** |
| depois | ~9,5 KiB/s → **~0,8 GB/dia** |

Mais ou menos 10x menos. Sem diferença perceptível no mapa: o app calcula a própria posição
pela rota local; `driver.positions` só desenha os outros carros como pontinhos, e
atualizar isso ~2x/s em vez de ~10x/s não muda nada na tela.

## Como reproduzir a medição

Ambiente no ar e simulação rodando:

```bash
curl -XPOST localhost:3000/simulacao/iniciar -H 'content-type: application/json' -d '{}'
```

**Rápido — `docker stats`:**

```bash
docker stats --no-stream mob-frota mob-api
```

Olhe o `NET I/O` do `mob-frota` (os 20 "apps"): recebido bem maior que enviado.

**Provar que é a causa:** troque para `POSICOES_BROADCAST_MS: 0` no compose,
`docker compose up -d api`, rode o script de novo — volta a aumentar. Depois
devolva para `500`.

**No navegador:** DevTools → Network → filtro `socket.io`. Como a bancada usa
polling, olhe o corpo das respostas `...transport=polling...` (vários por segundo,
alguns KB cada) ou só o contador "N requests / X transferred" no rodapé do painel
Network durante 10s. O medidor de franquia da própria bancada também serve de
termômetro.

## Ainda dá para melhorar (não entrou aqui)

- `driver.positions` devia mandar só `{driverId, latitude, longitude, heading}`.
- `io.emit` → salas: `city:<id>` para o mapa, uma sala de painel para
  `city.summary`, `trip:<ref>` para acompanhamento de corrida.
- `DriverRepository.listarOnline` usa `redis KEYS` no caminho quente — trocar por
  um índice (`SADD driver:online:<city>`).

---
---

# Enunciado original do desafio

# Desafio prático — Engenheiro(a) de Software Sênior, Backend

Bem-vindo. Este repositório é um recorte controlado da nossa plataforma de
mobilidade: a API de tempo real, o banco de corridas e uma bancada visual que
simula motoristas em operação.

Seu trabalho começa com um chamado aberto pelo suporte.

---

## O chamado

> **Chamado #4471 — Suporte / Financeiro — prioridade alta**
>
> Motoristas de Muzambinho vêm reclamando que o aplicativo consome o pacote de
> dados deles.
>
> O financeiro sinalizou que a linha de saída de dados do provedor de
> infraestrutura subiu.
>
> Precisamos entender o que está acontecendo e o que fazer a respeito.

Ninguém sabe a causa. Faz parte do desafio descobrir.

---

## Subindo o ambiente

Requisitos: Docker e Docker Compose.

```bash
docker compose up -d --build
```

O ambiente está pronto quando a API responder:

```bash
curl -s localhost:3000/health
```

Nos primeiros segundos a API reinicia uma ou duas vezes com `ECONNREFUSED` no
MySQL — é esperado, o `restart: unless-stopped` cuida disso. O seed carrega
cerca de 100 mil corridas.

Portas usadas no host — precisam estar livres:

- **Bancada visual:** http://localhost:8080
- **API:** http://localhost:3000
- **Coletor de telemetria:** http://localhost:9000 — `/stats` e `/handshake`
- **MySQL:** `localhost:3306` — banco `mobilidade`, usuário `mobilidade`, senha `mobilidade`
- **Redis:** `localhost:6379`

Na bancada, o botão **Iniciar teste** conecta os 6 aparelhos e a frota de fundo.
Cada aparelho roda uma corrida completa de cerca de 40 segundos; a frota apenas
circula pela malha emitindo posição. Deixe rodar até o fim pelo menos uma vez
antes de tirar conclusões.

Sem apertar o botão, **nenhum motorista fica online** — a frota só conecta
quando a simulação é ativada.

Para derrubar tudo, inclusive os dados:

```bash
docker compose down -v
```

---

## O que esperamos da entrega

Um repositório Git com o seu trabalho e um `README.md` na raiz descrevendo:

- o diagnóstico
- as decisões tomadas

### Sobre uso de IA

Pode usar. Não vamos perguntar e não vamos penalizar.

O que avaliamos é a entrega e a sua capacidade de sustentá-la: na etapa
seguinte você vai conversar com a gente sobre as decisões deste repositório.

---

## Mapa do repositório

```
docker-compose.yml   seis serviços: mysql, redis, api, coletor, frota, web
api/                 API Node.js — tempo real, corridas, precificação, telemetria
  src/               código da aplicação
  vendor/            integrações de terceiros com patch local
web/                 bancada visual (HTML/CSS/JS sem build)
  nginx.conf         serve a bancada e faz proxy de /api e /socket.io
db/init.sql          schema e seed
```

Três containers saem da mesma imagem `./api`, com entrypoints diferentes:

- **`api`** — a aplicação (`src/main.ts`)
- **`frota`** — simulador de motoristas (`src/sim/fleet.ts`); fala com a API
  pelo mesmo caminho que o aplicativo do motorista usa
- **`coletor`** — agente local de observabilidade (`src/coletor.ts`)

Boa investigação.
