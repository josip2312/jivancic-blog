<template>
  <div class="about">
    <h1 class="h1 title">About me</h1>
    <div class="about-content">
      <p>
        Hi, I am Josip Ivancic, a web developer working at NSoft. Currently
        based in Mostar, BiH.
      </p>
      <p>
        My main points of interest are on the frontend, specializing in Vue.js.
        My skillset also includes engineering complex UI-s, advanced SCSS
        setups, as well as unit and e2e testing. Recently started to take an
        interest in Open Source software and am exploring ideas to provide
        useful tools for other developers.
      </p>
      <p>
        Outside of programming, I enjoy reading, playing the guitar, and working
        out. I am intensely interested in physical and mental performance which
        relates to health and overall productivity. Constantly learning, being
        useful and creative are the principles I live by.
      </p>
      <p>
        You can find me on
        <AppLink> Github, </AppLink>
        <AppLink> LinkedIn </AppLink> and
        <AppLink> Instagram </AppLink>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about-content {
  max-width: 65ch;
  color: var(--c-text-lighter);
  font-size: 1.1rem;
}
</style>
