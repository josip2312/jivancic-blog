<template>
  <a :href="href" target="_blank">
    <slot />
  </a>
</template>

<script setup lang="ts">
import { PropType } from "vue";

defineProps({
  href: {
    type: String as PropType<string>,
    default: "#",
  },
});
</script>

<style lang="scss" scoped></style>
