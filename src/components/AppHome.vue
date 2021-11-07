<script setup lang="ts">
import posts from "../../.vitepress/metadata.json";
</script>

<template>
  <h1 class="h1 title">All posts</h1>
  <ul class="posts">
    <PostPreview v-for="post in posts" :key="post.title" :post="post" />
  </ul>
</template>

<style lang="scss" scoped>
.posts {
  margin: 0;
  padding: 0;
  line-height: 1.4;

  & > * + * {
    padding-top: 2rem;
    margin-top: 2rem;
    border-top: thin solid var(--c-divider);
  }
}
</style>
