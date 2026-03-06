
<!-- eslint-disable vue/no-unused-properties -->

<script>
  export default {
    name: "demo",
    props: {
      /* ✓ GOOD */
      foo: {
        type: String,
        required: false,
        default: "Hello",
      },
      bar: {
        type: String,
        required: true,
      },
      /* ✗ BAD */
      baz: {
        type: String,
        required: true,
        default: "Hello",
      },
    },
  };
</script>
