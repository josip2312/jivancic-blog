<template>
  <footer class="footer spacing-horizontal">
    <AppLink class="footer-link" href="https://github.com/josip2312">
      <Github />
    </AppLink>

    <AppLink
      class="footer-link"
      href="https://www.linkedin.com/in/josip-ivancic-b3521a1b4"
    >
      <Linkedin />
    </AppLink>

    <AppLink class="footer-link" href="https://www.instagram.com/ivancic_josip">
      <Instagram />
    </AppLink>
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
      width: 1.25rem;

      &:hover {
        color: var(--c-brand);
      }
    }
  }
}
</style>
