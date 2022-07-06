<script setup lang="ts">
import { computed } from "vue";
import { useData } from "vitepress";
const { page } = useData();

const pageTitle = computed(() => page.value.title);

const navItems = [
  {
    title: "Posts",
    href: "/",
  },
  {
    title: "Tips",
    href: "/tips",
  },
  {
    title: "About",
    href: "/about",
  },
];
</script>

<template>
  <ul class="nav-list">
    <li v-for="{ title, href } in navItems" :key="title" class="nav-list-item">
      <a
        class="nav-list-link"
        :class="{ active: pageTitle.includes(title) }"
        :href="href"
        >{{ title }}</a
      >
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.nav-list {
  --offset-left: 0.3rem;
  font-size: 1.25rem;

  display: flex;
  align-items: center;
  font-size: 1rem;
  padding: 0;
  list-style: none;

  &-link {
    display: block;
    padding: 0.25rem;
    color: var(--c-text-light);

    &.active {
      color: var(--c-text);
    }
  }

  & > * + * {
    margin-left: var(--offset-left);
  }

  @media screen and(min-width: 720px) {
    --offset-left: 1rem;
    margin-right: 1rem;

    &-link {
      padding: 0.25rem 0.25rem;
    }
  }
}
</style>
