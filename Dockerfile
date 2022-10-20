# Stage 1
FROM node:18-alpine3.14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

## Stage 2
#FROM nginx:1.13.12-alpine
#
#COPY --from=node /usr/src/app/dist/angular-docker /usr/share/nginx/html
#
#COPY ./nginx.conf /etc/nginx/conf.d/default.conf

#FROM nginx:1.13.3-alpine
#COPY /nginx/default.conf /etc/nginx/conf.d/
#RUN rm -rf /usr/share/nginx/html/*
#COPY dist/shop /usr/share/nginx/html
