# Specify the base image
FROM node:22-alpine3.21
WORKDIR /app
COPY package*.json ./

#Change this is using another package manager
RUN npm install -g pnpm --force 
RUN pnpm install
COPY . .

RUN pnpm standalone

#Runtime stage installs nodejs to make the container smaller
FROM alpine:3.20
RUN apk update && apk add --no-cache nodejs
RUN addgroup -S node && adduser -S node -G node
USER node
RUN mkdir /home/node/code && chown -R node:node /home/node/code
WORKDIR /home/node/code
COPY --from=0 --chown=node:node /app/.next/standalone .
EXPOSE 3000
CMD [ "node", "server.js" ]