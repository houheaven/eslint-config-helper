
<!-- eslint-disable vue/no-unused-properties -->
<!-- eslint-disable vue/require-default-prop -->

<script>
  export default {
    name: "demo",
    props: {
      /* ✓ GOOD */
      "greetingText": String,

      /* ✗ BAD */
      "greeting-text": String,
      "greeting_text": String,
    },
  };
</script>
