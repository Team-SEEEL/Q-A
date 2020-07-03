FROM node:14.4.0-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY package*.json ./

RUN npm install --production

COPY . .

EXPOSE 3003

