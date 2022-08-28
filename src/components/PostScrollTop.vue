<script setup lang="ts">
const scrollToTop = () => window.scrollTo(0, 0);
</script>

<template>
  <button title="Scroll to top" class="scroll" @click="scrollToTop">
    <ChevronUp />
  </button>
</template>

<style lang="scss" scoped>
.scroll {
  position: fixed;
  z-index: 10;
  bottom: 1rem;
  right: 1rem;
  background-color: var(--vp-c-bg-mute);
  border: none;
  padding: 0.6rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  .icon {
    width: 1.5rem;
  }
}
</style>
