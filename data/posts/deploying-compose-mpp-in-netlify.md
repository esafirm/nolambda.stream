---
title: Deploying Compose Multiplatform Project in Netlify
date: '2024-03-01'
tags: ['Github', 'CI/CD', 'Compose MPP']
draft: false
summary: A brief note on how to deploy Compose Multiplatform project in Netlify
---

## Background

If you're mainly working in Android app development, then you probably have heard about [Compose Multiplatform Project](https://www.jetbrains.com/lp/compose-multiplatform/). It's a new way to build your app using Jetpack Compose, and it's designed to work across multiple platforms, including Android, iOS, desktop, and the web.

Me and my friend have an [exciting side-project called Mobblox](https://www.patreon.com/Mobblox) that built upon Compose multiplatform and possibly other multiplatform solution like Flutter. The idea is basically having a mobile component library that use web technology as a catalog so it will be easier to showcase the component.

That's why we need to deploy the project to the web. And for that, we choose [Netlify](https://www.netlify.com/). The reason? It's simple, fast, and free. And it's my existing go-to for deploying web including this blog.

## Building The Project

Before we go to the deployment process, we need to build the project first. The project is built using Gradle, so the command is pretty much the same as any other Gradle project. Here's the command to build the project:

```bash
./gradlew composeApp:wasmJsBrowserDistribution
```

To explain a bit about the command about, we are executing `wasmJsBrowserDistribution` task in `composeApp` module. This task will generate a distributable version of the project that can be run in the browser. As you might guess from the task name itself, we are using [Kotlin Wasm](https://kotlinlang.org/docs/wasm-overview.html) in this project.

> Pro tip: you can add `--stacktrace` or `-s` in the command to debug if there's any error in the build process. Since it's still in the early stage, the message is not that clear and stacktrace will help you to debug it.

If the command is executed successfully, you will see a `build/dist/wasmJs/productionExecutable` directory under your module (in this case `composeApp`). This directory contains everything needed to run your application and is what you'll be uploading to Netlify.

In the current compose version (compose plugin 1.5.4), the result will be something like this:

```
|--composeApp.js
|--composeApp.js.map
|--composeApp.wasm
|--index.html
|--skiko.js
|--skiko.wasm
|--<resources> (ex: images, fonts, etc)
```

## Manual Deployment

If you want to see the result of your project quickly, you can manually deploy it to Netlify. Here's how:

1. Log in to your Netlify account
2. Go to https://app.netlify.com/drop
3. Drag and drop the `build/dist/wasmJs/productionExecutable` directory to the drop area

And you're done! Your project will be deployed to a unique URL that you can share with others.

## Automated Deployment with GitHub Actions

But hey, we are developers, we love automation! So, let's automate the deployment process using GitHub Actions.
Luckily, there's already a [GitHub Action](https://github.com/marketplace/actions/netlify-actions) for Netlify.

Let's cover the prerequisites first:

1. Get your Netlify access token. [Personal access tokens](https://app.netlify.com/user/applications#personal-access-tokens) > New access token
2. Get your Netlify site ID. [Sites](https://app.netlify.com/sites) > Click your site > Site details > Site information > API ID
3. Add the access token and site ID to your GitHub repository secrets. Go to your repository > Settings > Secrets > New repository secret

Set it to `NETLIFY_TOKEN` and `NETLIFY_SITE_ID` respectively.

And now let's create the GitHub Action workflow:

1. Create a new file in your project root directory called `.github/workflows/build-main.yml` (name can be different, it's up to you)
2. Add the following content to the file:

```yaml
name: Build Web and Deploy

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Set up JDK
        uses: actions/setup-java@v4
        with:
          java-version: '17'
          distribution: 'temurin'
          cache: gradle

      - name: Build Web Bundle with Gradle
        run: ./gradlew :composeApp:wasmJsBrowserDistribution --stacktrace

      - name: Deploy to Netlify
        uses: nwtgck/actions-netlify@v2.0
        with:
          publish-dir: 'composeApp/build/dist/wasmJs/productionExecutable'
          deploy-message: 'Deploy from GitHub Actions'
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
        timeout-minutes: 1
```

This workflow will be triggered when you push to the `main` branch. It will build the project and deploy it to Netlify using the Netlify GitHub Action.

And that's it! Now every time you push to the `main` branch, your project will be built and deployed to Netlify automatically.

Until next time, Cao~ 👋
