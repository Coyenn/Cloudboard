FROM node:latest
ENV NEXT_TELEMETRY_DISABLED 1

WORKDIR /app
COPY . .
RUN yarn install --production --ignore-scripts --prefer-offline
EXPOSE 3000
CMD [ "yarn", "dev" ]