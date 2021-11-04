<script setup lang="ts">
interface Props {
  href?: string;
}

withDefaults(defineProps<Props>(), {
  href: "#",
});
</script>

<template>
  <a :href="href" target="_blank" rel="noopener">
    <slot />
  </a>
</template>

<style lang="scss" scoped></style>
