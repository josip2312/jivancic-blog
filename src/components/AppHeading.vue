<template>
  <h1 class="page-title">
    <slot />
  </h1>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.page-title {
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 700;
  margin-bottom: 1.5rem;

  @include mq-small {
    margin-bottom: 2rem;
  }
}
</style>
