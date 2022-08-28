<script setup lang="ts">
interface Props {
  href?: string;
}

withDefaults(defineProps<Props>(), {
  href: "#",
});
</script>

<template>
  <a class="link" :href="href" target="_blank" rel="noopener">
    <slot />
  </a>
</template>

<style lang="scss" scoped>
.link {
  font-weight: 500;
}
</style>
