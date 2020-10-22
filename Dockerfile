FROM node:12-buster 

WORKDIR /usr/app

COPY . .
RUN npm install