FROM node:18 as builder
COPY . /app
WORKDIR /app

Run npm install -g pnpm

RUN pnpm install && pnpm build

FROM nginx:alpine
COPY --from=builder app/dist /usr/share/nginx/html
COPY ./nginx/mime.types /etc/nginx/mime.types
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf