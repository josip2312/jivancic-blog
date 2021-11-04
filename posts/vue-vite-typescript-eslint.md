---
title: Vue 3 and Vite with typescript and tooling
date: 2021-11-03
author: Josip Ivancic
description: How to setup typescript, linting, and prettier in your next Vue and Vite project
tags: ["vue", "vite", "typescript", "eslint"]
---

<script setup>
import PostMeta from '../src/components/PostMeta.vue'
</script>

<PostMeta />

> Storybook is an open source tool for building UI components and pages in isolation. It streamlines UI development, testing, and documentation, from the [official Storybook site](https://storybook.js.org/).

## Create-vue

Use the repo [create-vue](https://github.com/vuejs/create-vue) to get started, this will be the official way to setup a new Vue project with Vite in the future. After running `npm init vue@next` choose the options appropriate for your use case.

### Typescript

If you chose the Typescript option offered by the CLI tool you should be good to go.

> If you run into some issues regarding types try adding the following to your `tsconfig.json`

```json
{
  "compilerOptions": {
    ...
    "types": [], // add this
  }
}
```

### ESLint

You will need several packages, run the commands below

**ESLint**

```bash
npm i -D eslint eslint-plugin-vue
```

**Typescript**

```bash
npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser @vue/eslint-config-typescript # typescript specific
```

Next, create a `.eslintrc.js` which will look like this

```

```

### Visual testing tool

It is also a visual testing tool, from the UI we have access to each component state, which we can verify visually.

## Developing in isolation

We can run it completely independently of our application, so for example you could have your app running on one port and Storybook on a completely different one.
It is a purely development dependency.
Another benefit is that it makes us build decoupled components by design, since the development is done in an isolated sandbox environment.
This approach makes us focus on one component at a time, without the clutter of the application we are developing.
By writing a story we are automatically documenting the props and usage guidelines for our component.
