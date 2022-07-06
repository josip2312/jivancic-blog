---
title: Tips
subtext: Programming tips
sidebar: false
page: true
---

<script setup>
  import AppTips from "@/components/AppTips.vue";
</script>

<AppTips />

## Using enums as prop types

```js
import { toRefs } from "vue";

enum ButtonSize {
  Small = 'sm',
  Medium = 'md',
  Large = 'lg',
};

interface Props {
  primary?: boolean;
  size?: ButtonSize;
}

const props = withDefaults(defineProps<Props>(), {
  primary: false,
  size: ButtonSize.Medium,
});

const { primary, size } = toRefs(props);

// when using it
<ButtonComp :size="ButtonSize.Medium"> Button </ButtonComp>
```

## Destructuring with assignment

```js
const person = { fullName: "David" };

const { fullName: name } = person;

console.log(name); // => David
```

## Import and re-export a default export in a single line

```js
// utilities/index.js
export { default as dates } from "./dates";

// in another file
import { dates } from "<some-path>/utilities";
```

## Vue script setup prop typing with default values and complex types

```vue
<script setup lang="ts">
import { toRefs } from "vue";

type Size = "sm" | "md" | "lg";

interface Props {
  primary?: boolean;
  size?: Size;
}

const props = withDefaults(defineProps<Props>(), {
  primary: false,
  size: "md",
});

const { primary, size } = toRefs(props);
</script>
```

## Vue options API prop typing

```vue
<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "MyComponent",
  props: {
    type: String as PropType<string>, // cast to typescript type,
    default: "box",
  },
});
</script>
```
