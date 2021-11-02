<script setup lang="ts">
import PostPreview from "./PostPreview.vue";
import posts from "../../.vitepress/metadata.json";
</script>

<template>
  <div class="route">
    <h1 class="h1 title">All posts</h1>
    <div class="posts">
      <PostPreview v-for="post in posts" :key="post.title" :post="post" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.posts {
  & > * + * {
    border-top: thin solid var(--c-divider);
  }
}
</style>
