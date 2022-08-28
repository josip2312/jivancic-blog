---
title: Sass modules with the Vue CLI
date: 2021-11-01
author: Josip Ivancic
description: How to configure webpack for sass modules and set up scalable stylesheets with Vue 3 and the Vue CLI.
tags: ['vue', 'scss', 'webpack']
category: technical
---

<script setup>
import PostMeta from '@/components/PostMeta.vue'
</script>

<PostMeta repo="https://github.com/josip2312/vue-cli-sass"/>

> The new sass modules are only compatible with Dart Sass which you should be using. More info can be found on the official [sass-lang.com](https://sass-lang.com/blog/the-module-system-is-launched#use-the-heart-of-the-module-systemhttps://) page.

Not enough people are aware of the [announcement](https://sass-lang.com/blog/the-module-system-is-launchedhttps://) of the new Sass module system, of which the primary aim is to replace the `@import` rule with `@use` and `@forward`. It also exposes various built-in modules such as **sass:color**, **sass:map**, etc. If you're wondering why you should use `@use` over `@import`, in short, `@import` is being replaced with more explicit `@use` and `@forward` rules, it forces you to a more complex setup but will be worth it in the long run, especially if you're building some kind of library or package. Over the next few years Sass `@import` will be deprecated, and then removed.

## The @use rule

The `@use` rule makes variables, mixins, and functions from another stylesheet available in the current stylesheet. It pretty much does the same thing as `@import`, but with namespacing. Example from [sass-lang.com](https://sass-lang.com/blog/the-module-system-is-launched#use-the-heart-of-the-module-systemhttps://):

```scss
@use 'bootstrap';

.element {
  background-color: bootstrap.$body-bg;
  @include bootstrap.float-left;
}
```

You can also explicitly set the namespace by using `as`.

```scss
@use 'bootstrap' as b;

.element {
  @include b.float-left;
}
```

To include everything in the top-level namespace, use the special `*` symbol.

```scss
@use 'bootstrap' as *;

.element {
  @include float-left;
}
```

## The @forward rule

The other important feature of the module system is the `@forward` rule. It includes another module's variables, mixins, and functions without making them visible to the code within the current module. Basically, it makes it possible to organize across many files and load the styles from a single entry point file.

If you had multiple partial files in a `components` folder, you would `@forward` them through an `_index.scss` entry file. For example:

```scss
// components/_index.scss
@forward 'buttons';
@forward 'tags';
```

Then you would `@use` the appropriate stylesheet (pointing to the folder automatically references the `_index.scss` file).

```scss
// styles.scss
@use ‘components’;
```

To learn more about all the benefits and features introduced with modules, be sure to check out the official [sass-lang.com](https://sass-lang.com/blog/the-module-system-is-launched#use-the-heart-of-the-module-systemhttps://) website, there is also a great article on [css-tricks.com](https://css-tricks.com/introducing-sass-modules/https://).

## Using it with Vue

Create a new project with the Vue CLI, if you don't have it installed go to [vue-cli](https://cli.vuejs.org/guide/installation.htmlhttps://) and follow the instructions given. We need to run:

```shell
vue create using-sass-modules # or whatever name you want
```

After the prompt in the terminal, select **manually select features** and check the **CSS pre-processor option**. Choose the rest of the options by your project needs.

### Directory structure

First, we will create a directory to hold our styles, I named mine `styles`. How you organize your directories is your business, but I like to use an architecture similar to the one described in [sass-guidelines.es](https://sass-guidelin.es/https://). Inside of styles, we'll have an `abstracts`, `base` and `utilities` folder and inside each one partial file which will be `@forward`-ed through an `_index.scss` entry file ending up with this structure:

```shell
src/styles
├── abstracts
│   ├── _breakpoints.scss
│   ├── _colors.scss
│   ├── _font.scss
│   ├── _index.scss
│   └── _mixins.scss
├── base
│   ├── _base.scss
│   ├── _index.scss
│   ├── _reset.scss
│   ├── _root.scss
│   └── _typography.scss
├── main.scss
└── utilities
    ├── _colors.scss
    ├── _index.scss
    └── _layout.scss
```

The `main.scss` file will `@use` all our global styles. Obviously, you can adjust the files to your specific needs.

### File structure

The contents of the entry files will be:

```scss
// abstracts/_index.scss
@forward 'breakpoints';
@forward 'colors';
@forward 'font';
@forward 'mixins';
@forward 'variables';
```

```scss
// base/_index.scss
@forward 'reset';
@forward 'root';
@forward 'typography';
@forward 'base';
```

```scss
// utilities/_index.scss
@forward 'colors';
@forward 'layout';
```

and inside `main.scss`. Notice we are not including abstracts since they wouldn't work inside components because of the `scoped` attribute.

```scss
// main.scss
@use 'base';
@use 'utilities';
```

If we now `@use` the `main.scss` file in our `App.vue`, the styles should apply. However, if we try to use a mixin or a variable you'll notice we get an error since they aren't `@use`-d inside of our components.

### Vue config

To handle this we will add a `vue.config.js` file which is a wrapper for webpack configuration. With the help of this, we can include variables and mixins into every component in order not to repeat ourselves with a `@use` statement inside each component. Learn more about the config file [here](https://cli.vuejs.org/config/https://).

```javascript
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@use '@/styles/abstracts/_mixins.scss' as *;`,
      },
    },
  },
};
```

I am only including the mixins here since my variables are defined as custom properties.

If you now `@include` a media query or use a sass variable inside of your components it should work!

```vue
// HelloWorld.vue
<template>
  <h1 class="h1 hello">Hello world</h1>
</template>

<script>
export default {
  name: 'HelloWorld',
};
</script>

<style scoped lang="scss">
.hello {
  color: $primary;

  @include mq(small) {
    font-size: 7rem;
  }
}
</style>
```

And the result is:

![Hello world](../assets/result.png)

---

Congratulations, you are now all set up for developing a large-scale application with well-organized and scalable stylesheets!
