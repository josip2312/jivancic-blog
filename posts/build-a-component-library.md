---
title: Build a typescript component library with Vite
date: 2021-11-14
author: Josip Ivancic
description: How to set up the build step for your next component library
tags: ["vite", "typescript"]
---

<script setup>
import PostMeta from '@/components/PostMeta.vue'
</script>

<PostMeta repo="https://github.com/josip2312/typescript-lib-vite"/>

## Why Vite

Vite ships with a pre-configured build command that has many performance optimizations out of the box. It uses [Rollup](https://rollupjs.org/guide/en/) under the hood and provides an abstraction over the default rollup configuration. This makes it way easier to set up the build step without knowing all the internals of rollup.

### Components

For the sake of the example, I'm going to create a simple button component, but the build step remains the same for any number of components. In this example, I'm using the `<script setup>` syntax.

Component code:

```vue
<script setup lang="ts">
import { reactive } from "vue";

interface Props {
  primary?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  primary: false,
});

const { primary } = reactive(props);
</script>

<template>
  <button class="btn" :class="{ primary }">
    <slot />
  </button>
</template>

<style scoped>
.btn {
  padding: 0.5rem 1rem;
}
.btn.primary {
  background: hsl(239, 100%, 27%);
  color: #fff;
}
</style>
```

Next, I'm going to create the entry file for the library where all the components will be exported.

```ts
// src/index.ts
export { default as MyButton } from "./MyButton";
```

### Vite config

Vite is a fast new build tool that is intended for modern web projects. It uses native ES modules and provides a blazing-fast dev server and hot module replacement. Learn more about it on the official [website](https://vitejs.dev/guide/).

Vite is framework agnostic which means you can use it with most frontend frameworks, and the build config is pretty much the same. There is a [section](https://vitejs.dev/guide/build.html#library-mode) on the official website which describes different build modes, our interest is in the library mode build.

So we need to add the following to our `vite.config.ts` (or `.js`).

```js
// vite.config.ts
const path = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "MyComponentLib",
      fileName: (format) => `my-component-lib.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
```

If you now run `npm run build` you should get the output in the `dist` folder.

> If you're getting an error regarding `__dirname` or `path` you need to install node type declarations

```bash
npm i -D @types/node
```

### Package.json config

Before testing our build output we need to configure the `package.json` to point at correct built files. We are defining the entry point to the library.
You can learn more about what each option does by hovering the properties in VS Code.

```json
// "my-component-lib" should match the "name" field in your package.json
{
  "files": ["dist"],
  "main": "./dist/my-component-lib.umd.js",
  "module": "./dist/my-component-lib.es.js",
  "exports": {
    ".": {
      "import": "./dist/my-component-lib.es.js",
      "require": "./dist/my-component-lib.umd.js"
    }
  }
}
```

### Test build output

To test the library locally we can zip the dist file, before running the below change the `name` field in your `package.json` to your preferred library name.

Run the following:

```bash
npm pack
```

This command provides us with a zipped file that we can map to the library dependency in the `package.json`. After running this add the following to the `dependencies` field:

```json
 "dependencies": {
 "my-component-lib": "my-component-lib-0.0.0.tgz"
  },
```

After importing the library it should now work.

> If you run into dependency errors try deleting the zipped file and packing it again, or deleting the `package.lock.json` and `node_modules` and running` npm install` again.

```vue
<script setup lang="ts">
import { MyButton } from "my-component-lib";
import "/node_modules/my-component-lib/dist/style.css";
</script>
```

However, you'll notice we get an error regarding missing declaration files, we will solve this in the next step.

### Typescript declarations

To solve the typescript declarations error, we need to generate type declaration files for the components. We will do this using the `vue-tsc` package.

> Make sure to update `vue-tsc` to a newer version since the `create-vue` CLI defaults to an older version.

You need to add the following to `tsconfig.json`:

```json
{
  "outDir": "dist",
  "declaration": true
}
```

Change the build script to the following:

```json
{
  "build": "vite build && vue-tsc --emitDeclarationOnly && mv dist/src dist/types"
}
```

Lastly, set the path for the type declarations inside `package.json`

```json
{
  "types": "./dist/types/index.d.ts"
}
```

The last command in the build script moves the types to a `types` directory, by default they would be in a `src` directory since that is our target inside the `tsconfig`.

If you now repeat the build and pack process, the type error should not be there.

> If it's still there try deleting your `node_modules` and `package.lock.json` and installing the packages again.

### Publish to npm

Everything is already set up for publishing, you can just authenticate with npm and publish.

```bash
npm login # authenticate

npm publish # publish
```

### Conclusion

Vite makes it incredibly easy to build a component library with a very slim config. Coupled with the amazing development experience it provides I can conclude it is the next big thing in frontend development.
