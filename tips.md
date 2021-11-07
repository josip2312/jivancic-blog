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

## Vue options API prop typing

```vue
<script>
import { PropType } from "vue";

export default {
  props: {
    type: String as PropType<string>, // cast to typescript type
  }
}
</script>
```
