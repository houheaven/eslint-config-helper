
<!-- eslint-disable no-empty-function -->

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
