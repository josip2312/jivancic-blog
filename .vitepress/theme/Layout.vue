<script setup lang="ts">
import { computed } from 'vue';
import { useData } from 'vitepress';
import DefaultTheme from 'vitepress/theme';

const { Layout } = DefaultTheme;
const { frontmatter } = useData();

const isCentered = computed(() => frontmatter.value.centered);
const isPost = computed(() => !!frontmatter.value.category);
</script>

<template>
  <div class="index" :class="{ centered: isCentered, post: isPost }">
    <Layout> </Layout>
  </div>
</template>

<style lang="scss">
.post {
  overflow-x: hidden;
}

.post .content {
  max-width: 50rem !important;
}

.centered .content-container {
  max-width: 50rem !important;
}
</style>
