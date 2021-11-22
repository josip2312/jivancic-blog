<script setup lang="ts">
import { useData } from "vitepress";

defineProps<{
  repo?: string;
}>();

const formatDate = (date: Date) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const { frontmatter } = useData();
</script>

<template>
  <div class="post-data">
    <div class="heading">
      <h1 class="article-title">
        {{ frontmatter.title }}
      </h1>
      <dl class="date">
        <dt class="sr-only">Published on</dt>
        <dd class="date-time">
          <time :datetime="frontmatter.date">
            {{ formatDate(frontmatter.date) }}
          </time>
        </dd>
      </dl>
    </div>
    <a href="/" class="back">
      <ArrowLeft class="icon" />
      <span> Back to home page </span>
    </a>
    Full example on Github:
    <AppLink :href="repo">{{ repo }}</AppLink>
  </div>
  <PostScrollTop />
</template>

<style lang="scss" scoped>
@use "@/styles/_mixins.scss" as *;
.post-data {
  margin-top: 1.5rem;
}
.heading {
  margin-bottom: 1.5rem;

  .article-title {
    margin: 0;
    margin-bottom: 0.75rem;
    line-height: 1.15;
  }

  .date {
    font-size: 0.875rem;
    white-space: nowrap;
    color: var(--c-text-lighter);
    margin: 0;
    margin-top: 0.25rem;

    &-time {
      margin: 0;
    }
  }
}

.back {
  width: fit-content;
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;

  .icon {
    margin-right: 0.5rem;
    transform-origin: right;
    transition: transform 100ms ease-out;
  }

  &:hover {
    .icon {
      transform: scaleX(1.15);
    }
  }
}
</style>
