<template>
  <ul class="nav-list">
    <li class="nav-list-item">
      <a class="nav-list-link" href="/">Home</a>
    </li>
    <li class="nav-list-item">
      <a class="nav-list-link" href="/tips">Tips</a>
    </li>
    <li class="nav-list-item">
      <a class="nav-list-link" href="/about">About me</a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.nav-list {
  font-size: 1.25rem;
  padding: 0;
  padding-top: 1rem;

  list-style: none;

  &-link {
    padding-top: 0.25rem;
    padding-left: 1.5rem;
    display: block;
    color: var(--c-text);
  }

  & > * + * {
    margin-top: 0.5rem;
  }

  @media screen and(min-width: 720px) {
    display: flex;
    align-items: center;
    font-size: 1rem;
    padding-top: 0;
    margin-right: 1.5rem;

    &-link {
      padding: 0;
    }

    & > * + * {
      margin-top: 0;
      margin-left: 1.5rem;
    }
  }
}
</style>
