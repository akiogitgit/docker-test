# メインイメージを軽いnodeに
FROM node:lts-buster-slim

RUN apt-get update && apt-get install -y \
  libssl-dev \
  openssl

# cd
WORKDIR /app

# yarnでnode_modulesを作成する
COPY package.json ./

RUN yarn