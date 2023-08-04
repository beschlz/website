# My Personal Website

In this repo you can find the source code for my website [bschulz.dev](https://bschulz.dev).

This source code is published under the MIT-License.

## Get up and running
Install [node](https://nodejs.org/) and [pnpm](https://pnpm.io/installation).

Build the application with
``` sh
pnpm install
```

And run the app with
``` sh
pnpm
pnpm dev
```

## Tooling
This project uses [astro](https://astro.build) and [react](https://reactjs.org)

## Build and Deploy

``` sh
/docker/Dockerfile # dockerfile
railway.json # deployment config
dist/ # output folder of astro
nginx/ # configuration for nginx
src/ # the src dir
```
For deployment [railway.app](https://railway.app) is used. On every commit to main a github aciton is triggered, that builds a docker image, publishes it to githuba and triggers a new deployment to railway. Note that railway does not uses the just build image, but does build the same dockerfile with the new code itself.

Since railway only supports hosting in US-West, using a CDN is on my todo list.

