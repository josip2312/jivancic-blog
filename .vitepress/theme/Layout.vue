<script setup lang="ts">
import { computed } from "vue";
import { useData } from "vitepress";
import DefaultTheme from "vitepress/theme";

const { Layout } = DefaultTheme;

const { frontmatter } = useData();
const isPage = computed(() => frontmatter.value.page);
</script>

<template>
  <div class="index" :class="{ page: isPage }">
    <Layout>
      <template #sidebar-top v-if="isPage">
        <AppNavigation />
      </template>
      <template #navbar-search>
        <AppNavigation class="desktop-nav" />
        <DarkMode />
      </template>
    </Layout>
    <TheFooter />
  </div>
</template>

<style lang="scss">
@use "@/styles/mixins" as *;

.desktop-nav {
  display: none;

  @include mq-small {
    display: flex;
    align-items: center;
  }
}

.index {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

// when not on article
.index.page {
  .container {
    width: 100%;
    max-width: 60rem;
  }

  .content,
  .home-content {
    padding-top: 1rem;
    padding-bottom: 2.5rem;

    @include mq-small {
      padding-top: 2.5rem;
    }
  }
}
</style>
