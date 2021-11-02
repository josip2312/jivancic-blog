<script setup lang="ts">
import { computed } from "vue";
import { useDark, useToggle } from "@vueuse/core";
import Dark from "@/components/icons/Dark.vue";
import Light from "@/components/icons/Light.vue";

const isDark = useDark();
const toggleDark = useToggle(isDark);

const ariaMessage = computed(
  () => `Toggle ${isDark.value ? "light" : "dark"} mode`
);
</script>

<template>
  <button class="dark-mode" @click="toggleDark" :aria-label="ariaMessage">
    <Dark v-if="!isDark" />
    <Light v-else />
  </button>
</template>

<style lang="scss" scoped>
.dark-mode {
  display: flex;
  align-items: center;
  justify-content: center;

  background: none;
  border: none;
  color: inherit;
  border-radius: 50%;
  height: 2.5rem;
  width: 2.5rem;
  padding: 0.5rem;

  &:hover,
  &:focus {
    background: var(--c-bg-accent);
  }

  .icon {
    width: 100%;
  }
}
</style>
