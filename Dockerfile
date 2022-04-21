FROM node:16 as builder
WORKDIR /vue-bd
COPY package*.json ./
RUN yarn install --prefer-offline --pure-lockfile --non-interactive --production=false --registry=https://registry.npmmirror.com
COPY . .
RUN yarn build

FROM node:lts-alpine
ENV NODE_ENV=production
ENV HOST 0.0.0.0 

WORKDIR /app
COPY --from=builder /vue-bd/package*.json ./
RUN NODE_ENV=production yarn install --pure-lockfile --non-interactive --production --registry=https://registry.npmmirror.com

COPY --from=builder /vue-bd/.output ./.output
EXPOSE 3000
ENTRYPOINT [ "node", ".output/server/index.mjs" ]
