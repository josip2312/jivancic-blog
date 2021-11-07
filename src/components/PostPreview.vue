<script setup lang="ts">
import { reactive, PropType } from "vue";

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
}

const props = defineProps({
  post: {
    type: Object as PropType<Post>,
    required: true,
  },
});

const { title, description, href, date, tags } = reactive(props.post);
</script>

<template>
  <li class="post">
    <a :href="href" tabindex="-1" class="post-wrapper spacing">
      <h2 class="post-title">
        {{ title }}
      </h2>
      <p class="post-description">
        {{ description }}
      </p>
      <div class="post-tags">
        <span v-for="tag in tags" :key="tag" class="post-tag">{{ tag }}</span>
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
    </a>
  </li>
</template>

<style lang="scss" scoped>
@use "@/styles/mixins" as *;

.post {
  color: var(--c-text);

  &-wrapper {
    outline: none;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: inherit;

    @include mq-small {
      --spacing: 1.25em;
    }
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
      display: inline-block;
      font-size: 0.875rem;
      margin-right: 1rem;
      padding: 0.2rem 0.6rem;
      background: var(--c-bg-accent);
      border-radius: 6px;
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
