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
  text-align: center;
  line-height: 1.3;
  padding: 0.5rem 0.75rem;
  background-color: var(--c-bg);
  border-radius: 6px;
  transition: background-color 200ms ease-out;

  &:hover {
    background-color: var(--c-bg-accent);
  }
}
</style>
