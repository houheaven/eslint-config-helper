
<!-- eslint-disable vue/require-name-property -->
<!-- eslint-disable vue/return-in-computed-property -->
<!-- eslint-disable no-empty-function -->

<script>
  export default {
    data() {
      return {
        /* ✗ BAD */
        bar: this.foo,
      };
    },
    computed: {
      foo() {},
    },
  };
</script>
