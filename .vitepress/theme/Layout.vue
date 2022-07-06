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

.no-sidebar {
  .sidebar-button {
    display: none;
  }

  .nav-bar {
    padding-left: 1.5rem !important;
  }
}

.nav-bar {
  padding-left: 3.35rem !important;
  padding-right: 1rem !important;

  @include mq-small {
    padding-left: 1.5rem !important;
  }

  .sidebar-button {
    left: 0.75rem;
  }
}

.nav-bar-title {
  font-size: 1.25rem;
  white-space: nowrap;
}

.index {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.page .container {
  max-width: 45rem;
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
