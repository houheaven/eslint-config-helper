
<template>
  <!-- ✗ BAD -->
  <my-input v-on="$listeners" />
</template>

<script>
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
