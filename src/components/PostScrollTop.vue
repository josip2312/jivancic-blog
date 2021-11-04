<script setup lang="ts">
const scrollToTop = () => window.scrollTo(0, 0);
</script>

<template>
  <button class="scroll" @click="scrollToTop"><ChevronUp /></button>
</template>

<style lang="scss" scoped>
.scroll {
  position: fixed;
  z-index: 10;
  bottom: 1rem;
  right: 1rem;
  color: var(--c-text);
  background-color: var(--c-bg-accent);
  border: none;
  padding: 0.6rem;
  border-radius: 50%;
  .icon {
    width: 1.5rem;
  }
}
</style>
