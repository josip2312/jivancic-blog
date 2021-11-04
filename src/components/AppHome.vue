<script setup lang="ts">
import posts from "../../.vitepress/metadata.json";
</script>

<template>
  <div>
    <h1 class="h1 title">All posts</h1>
    <div class="posts">
      <PostPreview v-for="post in posts" :key="post.title" :post="post" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.posts {
  & > * + * {
    padding-top: 2rem;
    margin-top: 2rem;
    border-top: thin solid var(--c-divider);
  }
}
</style>
