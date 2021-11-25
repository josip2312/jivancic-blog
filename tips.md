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
import { reactive } from "vue";

type Size = "sm" | "md" | "lg";

interface Props {
  primary?: boolean;
  size?: Size;
}

const props = withDefaults(defineProps<Props>(), {
  primary: false,
  size: "md",
});

const { primary, size } = reactive(props);
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
