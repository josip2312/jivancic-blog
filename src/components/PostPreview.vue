<script setup lang="ts">
import { reactive } from "vue";

interface Date {
  string: string;
  time: number;
}

interface Post {
  title: string;
  description: string;
  href: string;
  date: Date;
  tags: string[];
  category: string;
}

interface Props {
  post: Post;
}

const props = defineProps<Props>();

const { title, description, href, date, tags } = reactive(props.post);
</script>

<template>
  <li class="post spacing">
    <a :href="href" tabindex="-1" class="post-wrapper">
      <h2 class="post-title">
        {{ title }}
      </h2>
    </a>
    <p class="post-description">
      {{ description }}
    </p>
    <div class="post-tags">
      <AppTag v-for="tag in tags" :key="tag" tag="span" class="post-tag">
        {{ tag }}
      </AppTag>
    </div>
    <div class="post-footer">
      <a :href="href" class="post-link">
        <span class="span">Read more</span>
        <ArrowRight />
      </a>
      <div class="post-date">
        {{ date.string }}
      </div>
    </div>
  </li>
</template>

<style lang="scss" scoped>
@use "@/styles/mixins" as *;

.post {
  color: var(--c-text);
  --spacing: 1.5em;

  &-wrapper {
    outline: none;
    text-decoration: none;
    color: inherit;
  }

  &-title {
    border-bottom: 0;
    margin-top: 0;
    margin-bottom: 1rem;
    padding: 0;
  }

  &-description {
    margin: 0;
    color: var(--c-text-light);

    @include mq-small {
      width: 100%;
      max-width: 75%;
    }
  }

  &-footer {
    display: flex;
    justify-content: space-between;
  }

  &-date {
    color: var(--c-text-light);
  }

  &-tags {
    .post-tag {
      margin-right: 1rem;
      background: var(--c-bg-accent);
    }
  }

  &-link {
    display: flex;
    align-items: center;

    .icon {
      transform-origin: left;
      transition: transform 100ms ease-out;
    }

    &:hover {
      .icon {
        transform: scaleX(1.15);
      }
    }

    .span {
      display: block;
      margin-right: 0.5rem;
    }
  }
}
</style>
