<template>
  <footer class="footer spacing-horizontal">
    <AppLink class="footer-link" href="https://github.com/josip2312">
      <Github />
    </AppLink>

    <AppLink class="footer-link" href="https://github.com/josip2312">
      <Linkedin />
    </AppLink>

    <AppLink class="footer-link" href="https://github.com/josip2312">
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
      width: 1.5rem;
    }
  }
}
</style>
