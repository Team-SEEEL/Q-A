FROM node:14.4.0-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

# COPY package*.json ./

COPY . /src/app

RUN npm install --production

# COPY . .

EXPOSE 3003

CMD [ "npm", "start" ]