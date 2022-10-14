# メインイメージを軽いnodeに
FROM node:lts-buster-slim

# cd
WORKDIR /app

# yarnでnode_modulesを作成する
COPY package.json ./
# COPY package.json ./package.json

RUN yarn

# COPY . .

# CMD [ "yarn","dev" ]