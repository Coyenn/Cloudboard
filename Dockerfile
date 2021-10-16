FROM node:latest

COPY ./ /app
WORKDIR /app
RUN yarn install && yarn build
EXPOSE 80

CMD [ "/bin/bash", "cd /app && yarn start" ]