
<!-- eslint-disable no-empty-function -->
<!-- eslint-disable vue/require-expose -->

<script>
  export default {
    name: "demo",
    /* ✓ GOOD */
    beforeMount() {},
    mounted() {},
    beforeUnmount() {},
    unmounted() {},

    /* ✗ BAD */
    beforeDestroy() {},
    destroyed() {},
  };
</script>
