FROM node:latest
ENV NEXT_TELEMETRY_DISABLED 1

WORKDIR /app
COPY . .
RUN yarn install --production --ignore-scripts --prefer-offline
RUN yarn add postcss-flexbugs-fixes tailwindcss postcss-100vh-fix postcss-hover-media-feature postcss-preset-env
RUN yarn build
EXPOSE 80
CMD [ "yarn", "start" ]