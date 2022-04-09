FROM node:latest
ENV NEXT_TELEMETRY_DISABLED 1

RUN useradd cloudboard
WORKDIR /app
COPY . .
RUN touch ./prisma/app.db && chmod -R 777 ./prisma
RUN yarn install
RUN yarn build
RUN chown cloudboard:cloudboard -R /app
EXPOSE 80
USER cloudboard
CMD [ "yarn", "start" ]