---
title: Vue 3 and Vite with typescript and tooling
date: 2021-11-03
author: Josip Ivancic
description: How to setup typescript, linting, and prettier in your next Vue and Vite project
tags: ["vue", "vite", "typescript", "eslint"]
---

<script setup>
import PostMeta from '@/components/PostMeta.vue'
</script>

<PostMeta />

## Create-vue

See full example on repo: [vue-ts-eslint-template](https://github.com/josip2312/vue-ts-eslint-template).

Use the repo [create-vue](https://github.com/vuejs/create-vue) to get started, this will be the official way to set up a new Vue project with Vite in the future. After running `npm init vue@next` choose the options appropriate for your use case.

### Volar

The first step is to enable the [Volar](https://github.com/johnsoncodehk/volar) extension and disable the [Vetur](https://github.com/vuejs/vetur) extension.
Volar is the new recommended extension to use with Vue 3 and typescript.

### Typescript

If you chose the Typescript option offered by the CLI tool you should be good to go.

> If you run into some issues regarding types try adding the following to your `tsconfig.json`

```json
{
  "compilerOptions": {
    ...
    "types": ["vite/cli"], // add this
  }
}
```

### ESLint

You will need several packages, run the commands below in your terminal:

**ESLint**:

```bash
npm i -D eslint eslint-plugin-vue eslint-config-prettier
```

**Typescript**:

```bash
npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser @vue/eslint-config-typescript
```

Next, create a `.eslintrc.js` which will look something like this, can be extended to fit your use case.

```js
module.exports = {
  env: {
    node: true,
  },
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
    withDefaults: "readonly",
  },
  extends: [
    "@vue/typescript/recommended",
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "prettier",
  ],
};
```

### Prettier

You can add a `.prettierrc.js` with the config that fits your needs.

**Example config**:

```js
module.exports = {
  singleQuote: true,
  trailingComma: "all",
};
```

### Format on commit

Read more about pre-commit hooks [here](https://prettier.io/docs/en/precommit.html).

In your terminal run the command:

```bash
npx mrm@2 lint-staged
```

This will setup a precommit hook with [husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged).

You will see a new entry in your `package.json`

```json
"lint-staged": {
    "*.js": "eslint --cache --fix"
  }
```

You can also easily set up hooks to run on pre-push, learn more about this on the husky and lint-staged repos.

I will adjust the config to be:

```json
"lint-staged": {
    "*.{js,vue}": [
      "prettier --write",
      "eslint --cache --fix"
    ],
    "*.{scss, css, md}": [
      "prettier --write"
    ]
  }
```

So every staged `.js` or `.vue` file gets formatted, then fixed with ESLint.

Every `.css`, `.scss`, and `.md` file will just get formatted.
