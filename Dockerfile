FROM oven/bun:latest as builder
ARG TAG
WORKDIR /app
COPY --chown=node:node . .
RUN bun install
ENV NODE_ENV=production
RUN cd "/app/${TAG}" && bun generate

FROM nginx:stable-alpine as production
ARG TAG
COPY --from=builder "/app/${TAG}/.output/public" /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
