FROM node:latest
ENV NEXT_TELEMETRY_DISABLED 1

WORKDIR /app
COPY . .
RUN yarn install --production --ignore-scripts --prefer-offline
RUN yarn build
EXPOSE 80
CMD [ "yarn", "start" ]