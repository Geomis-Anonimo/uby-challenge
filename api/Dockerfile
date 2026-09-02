FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev --no-audit --no-fund

COPY tsconfig.json ./
COPY src ./src
COPY vendor ./vendor

EXPOSE 3000

CMD ["npx", "tsx", "src/main.ts"]
