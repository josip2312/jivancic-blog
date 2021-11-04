---
title: Frontends with Storybook
date: 2021-11-01
author: Josip Ivancic
description: Diving into the reasons why you should consider using Storybook for your next frontend project.
tags: ["frontend", "storybook", "testing"]
---

<script setup>
import PostMeta from '@/components/PostMeta.vue'
</script>

<PostMeta />

> Storybook is an open source tool for building UI components and pages in isolation. It streamlines UI development, testing, and documentation, from the [official Storybook site](https://storybook.js.org/).

## What is Storybook

Storybook is an out-of-the-box solution for building component libraries. By default, we get everything you would expect to find on a documentation site of any component framework and more.

### Isolated environment

It provides an isolated environment for building components. What does isolated mean? It means we can develop a component outside of the context of the app we are building. This could be useful if our app is complex and we want to avoid changing existing code in order to render out new components.

### Living style guide and documentation

One of the main issues I've seen with components in my company is the lack of documentation, or the documentation is simply outdated. By incorporating Storybook you will at the very least have a basic documentation, which will always stay up to date, because it is automatically generated based on the code you write. Not to mention that you also get a living style guide and the possibility to customize the documentation further with `.md` or `.mdx` files.

### Visual testing tool

It is also a visual testing tool, from the UI we have access to each component state, which we can verify visually.

## Developing in isolation

We can run it completely independently of our application, so for example you could have your app running on one port and Storybook on a completely different one.
It is a purely development dependency.
Another benefit is that it makes us build decoupled components by design, since the development is done in an isolated sandbox environment.
This approach makes us focus on one component at a time, without the clutter of the application we are developing.
By writing a story we are automatically documenting the props and usage guidelines for our component.

##
