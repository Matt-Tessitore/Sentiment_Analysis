FROM node:7.10-alpine
MAINTAINER Alexander Keating

RUN mkdir /code

EXPOSE 9000

COPY . /code/
WORKDIR code

RUN npm install --production
RUN npm run build


CMD npm run prod