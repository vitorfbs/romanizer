FROM node:10

WORKDIR /usr/src/app
COPY . /usr/src/app

RUN npm install

EXPOSE 5000
CMD npm run development
