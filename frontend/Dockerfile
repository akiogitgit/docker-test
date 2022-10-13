FROM node:lts-buster-slim

WORKDIR /app
COPY package.json /app/package.json
RUN yarn
CMD [ "yarn","dev" ]