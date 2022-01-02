<script setup lang="ts">
import { ref, computed, onUnmounted } from "vue";
import postsData from "../../.vitepress/metadata.json";

const categories = ["Technical", "Non-technical"];
let chosenCategory = ref(window.location.hash.split("#")[1] || "Technical");

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
  <h1 class="h1 title">My posts</h1>
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
  font-size: 1.65rem;
  margin-bottom: 2.5rem;

  & > * + * {
    padding-left: 0.75rem;
    margin-left: 1.5rem;
  }

  .category {
    position: relative;
    font-weight: bold;
    color: var(--c-text-lightest);
    text-decoration: none;
    transition: color 125ms ease-out;

    &:not(:last-child) {
      &::after {
        content: "";
        position: absolute;
        right: -1.25rem;
        top: 0;
        bottom: 0;
        width: 2px;
        height: 100%;
        background-color: var(--c-bg-accent-2);
      }
    }

    &.active {
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
