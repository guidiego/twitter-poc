FROM node:alpine

ADD . /app

RUN cd app \
        && yarn install

CMD ["node", "/app"]
