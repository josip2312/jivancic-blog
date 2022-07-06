<script setup lang="ts">
import { ref, computed, onUnmounted } from "vue";
import postsData from "../../.vitepress/metadata.json";

const categories = ["Technical", "Non-technical"];
const chosenCategory = ref(window.location.hash.split("#")[1] || categories[0]);

const posts = computed(() => {
  return postsData.filter(
    (post) => post.category === chosenCategory.value.toLowerCase()
  );
});

const updateCategory = () => {
  chosenCategory.value = window.location.hash.split("#")[1];
};

window.addEventListener("hashchange", updateCategory);

onUnmounted(() => {
  window.removeEventListener("hashchange", updateCategory);
});
</script>

<template>
  <h1 class="h1 title">Posts</h1>
  <div class="categories">
    <a
      v-for="category in categories"
      :key="category"
      :href="`#${category}`"
      class="category"
      :class="{ active: category === chosenCategory }"
    >
      {{ category }}
    </a>
  </div>
  <ul class="posts">
    <PostPreview v-for="post in posts" :key="post.title" :post="post" />
  </ul>
</template>

<style lang="scss" scoped>
.categories {
  display: flex;
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;

  .category {
    position: relative;
    font-weight: bold;
    color: var(--c-text-lighter);
    text-decoration: none;
    padding: 0.65rem 1.15rem;
    margin-right: 0.75rem;
    margin-bottom: 0.75rem;
    border-radius: 10rem;
    transition: color 125ms ease-out;

    &.active {
      background-color: var(--c-bg-accent);
      color: var(--c-text);
    }
  }
}

.posts {
  list-style: none;
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
