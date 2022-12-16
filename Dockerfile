FROM node:16-alpine as build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM node:16-alpine as run

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci --only=production

COPY --from=build /app/build ./build
COPY --from=build /app/.env /app/.env

EXPOSE 3000

CMD ["node", "."]