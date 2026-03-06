
<!-- eslint-enable vue/no-setup-props-destructure -->
<!-- eslint-disable vue/no-setup-props-reactivity-loss -->
<!-- eslint-disable no-undef -->

<script>
  export default {
    name: "demo",
    /* ✗ BAD */
    setup({ count }) {
      watch(() => count, () => { // not going to detect changes
        console.log(count);
      });

      return () => h("div", count); // not going to update
    },
  };
</script>
