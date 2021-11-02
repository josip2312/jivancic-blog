<script setup lang="ts">
import Github from "./icons/Github.vue";
import Linkedin from "./icons/Linkedin.vue";
import Instagram from "./icons/Instagram.vue";
</script>

<template>
  <footer class="footer spacing-horizontal">
    <a
      href="https://github.com/josip2312"
      class="footer-link"
      target="_blank"
    >
      <Github />
    </a>
    <a
      href="https://www.linkedin.com/in/josip-ivancic-b3521a1b4/"
      target="_blank"
      class="footer-link"
    >
      <Linkedin />
    </a>
    <a
      href="https://www.linkedin.com/in/josip-ivancic-b3521a1b4/"
      target="_blank"
      class="footer-link"
    >
      <Instagram />
    </a>
  </footer>
</template>

<style lang="scss">
.footer {
  width: 100%;
  max-width: 960px;
  margin-top: auto;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  justify-content: center;
  padding: 1rem 0;

  &-link {
    --spacing: 1.5em;
    color: var(--c-text-light);
    display: inline-block;
    padding: 0 0.5rem;

    .icon {
      width: 1.5rem;
    }
  }
}
</style>
