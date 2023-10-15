FROM oven/bun:latest as builder
WORKDIR /app
COPY --chown=node:node . .
RUN bun install
ENV NODE_ENV=production
RUN cd /app/support && bun generate
RUN cd /app/core && bun generate
RUN cd /app/finder && bun generate
RUN cd /app/portal && bun generate

FROM nginx:stable-alpine as production
COPY --from=builder /app/support/dist /usr/share/nginx/html
COPY --from=builder /app/core/dist /usr/share/nginx/html/core
COPY --from=builder /app/finder/dist /usr/share/nginx/html/finder
COPY --from=builder /app/portal/dist /usr/share/nginx/html/portal
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
