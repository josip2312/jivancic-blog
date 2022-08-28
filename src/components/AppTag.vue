<script lang="ts">
import { h, defineComponent } from "vue";

export default defineComponent({
  name: "AppTag",

  props: {
    tag: {
      type: String,
      default: "span",
    },
    color: {
      type: String,
      default: "",
    },
  },

  setup(props, { slots }) {
    const classes = ["tag", props.color];

    // render
    return () =>
      h(
        props.tag,
        {
          class: classes,
        },
        slots.default ? slots.default() : []
      );
  },
});
</script>

<style lang="scss" scoped>
.tag {
  color: var(--c-text-light);
  font-size: 0.875rem;
  font-weight: 500;
  text-align: center;
  padding: 0.5rem 0.875rem;
  border-radius: 6px;
}
</style>
