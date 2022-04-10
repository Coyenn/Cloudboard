FROM node:latest
ENV NEXT_TELEMETRY_DISABLED 1

WORKDIR /app
COPY . .
RUN touch ./prisma/app.db && chmod -R 777 ./prisma
RUN yarn install
RUN yarn build
EXPOSE 80
CMD [ "yarn", "start" ]