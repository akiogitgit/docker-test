# メインイメージを軽いnodeに
FROM node:lts-buster-slim

# cd
WORKDIR /app

# yarnでnode_modulesを作成する
COPY package.json ./

RUN yarn