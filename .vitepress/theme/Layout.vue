<script setup lang="ts">
import DefaultTheme from "vitepress/theme";
import DarkMode from "./DarkMode.vue";
import AppNavigation from "@/components/AppNavigation.vue";
import TheFooter from "@/components/TheFooter.vue";

const { Layout } = DefaultTheme;
</script>

<template>
  <div class="index">
    <Layout>
      <template
        #sidebar-top
        v-if="!$frontmatter.sidebar && !$frontmatter.author"
      >
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
.desktop-nav {
  display: none;

  @media screen and(min-width: 720px) {
    display: flex;
    align-items: center;
  }
}

.index {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
