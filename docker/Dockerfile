FROM node:18 as builder
COPY . /app
WORKDIR /app
RUN yarn && yarn build

FROM nginx:alpine
COPY --from=builder app/dist /usr/share/nginx/html
COPY ./nginx/mime.types /etc/nginx/mime.types
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf