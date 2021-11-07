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

## Vue script setup Prop typing with default values and complex types

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

const { primary /* type: boolean */, size /* type: Size */ } = reactive(props);
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
