
<template>
  <!-- ✗ BAD -->
  <my-input v-on="$listeners" />
</template>

<script>
  /* eslint-disable vue/require-expose */
  /* eslint-disable vue/no-unused-properties */
  export default {
    name: "demo",
    computed: {
      listeners() {
        return {
          /* ✗ BAD */
          ...this.$listeners,
          input() { /* */ },
        };
      },
    },
  };
</script>
