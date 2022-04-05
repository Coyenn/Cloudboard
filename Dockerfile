FROM node:latest
ENV NEXT_TELEMETRY_DISABLED 1

WORKDIR /app
COPY . .
RUN touch /app/app.db
RUN yarn install
RUN yarn build
EXPOSE 80
CMD [ "yarn", "start" ]