
<!-- eslint-disable vue/no-shared-component-data -->
<!-- eslint-disable vue/require-expose -->
<!-- eslint-disable vue/no-unused-properties -->

<script>
  export default {
    name: "demo",
    /* ✗ BAD */
    data: {
      foo: null,
    },
  };
</script>
