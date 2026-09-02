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
