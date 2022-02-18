FROM node:16 as builder
WORKDIR /vue-bd
COPY package*.json ./
RUN npm install --prefer-offline --pure-lockfile --non-interactive --production=false --registry=https://registry.npm.taobao.org
COPY . .
RUN npm run build

FROM node:lts-alpine
ENV NODE_ENV=production
ENV HOST 0.0.0.0 

WORKDIR /app
COPY --from=builder /vue-bd/package*.json ./
RUN NODE_ENV=production npm install --pure-lockfile --non-interactive --production=true --registry=https://registry.npm.taobao.org

COPY --from=builder /vue-bd/.output ./.output
EXPOSE 3000
ENTRYPOINT [ "npm", "run", "start" ]
