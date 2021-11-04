<script setup lang="ts">
import { useData } from "vitepress";

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
  </div>
  <PostScrollTop />
</template>

<style lang="scss" scoped>
@use "../styles/_mixins.scss" as *;
.post-data {
  margin-top: 1.5rem;
}
.heading {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  .article-title {
    margin: 0 0.5rem 0.25rem 0;
  }

  .date {
    color: var(--c-text-light);
    margin: 0;
    margin-top: 0.25rem;

    &-time {
      margin: 0;
    }
  }

  @include mq-small {
    flex-direction: row;

    .article-title {
      margin-bottom: 0;
    }
  }
}

.back {
  display: flex;
  align-items: center;

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
