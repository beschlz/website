# My Personal Website

In this repo you can find the source code for my website [bschulz.dev](https://bschulz.dev).

This source code is published under the MIT-License.

## Get up and running

Install [node](https://nodejs.org/) and [pnpm](https://pnpm.io/installation).

Build the application with

```sh
pnpm install
```

And run the app with

```sh
pnpm
pnpm dev
```

## Tooling

This project uses [astro](https://astro.build) and [react](https://reactjs.org)

## Build and Deploy

```sh
/docker/Dockerfile # dockerfile
dist/ # output folder of astro
nginx/ # configuration for nginx
src/ # the src dir
```

This website is deployed in AWS using Terraform.
