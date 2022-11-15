FROM node:18 as builder
COPY . /app
WORKDIR /app
RUN npm ci && npm run build

FROM nginx:alpine
COPY --from=builder app/public /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf