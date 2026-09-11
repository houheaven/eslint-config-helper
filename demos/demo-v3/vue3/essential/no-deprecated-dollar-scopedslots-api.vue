
<!-- eslint-disable vue/no-root-v-if -->

<template>
  <!-- ✗ BAD -->
  <div v-if="$scopedSlots.default"><slot></slot></div>
</template>

<script>
  /* eslint-disable vue/require-expose */
  export default {
    name: "demo",
    render() {
      /* ✗ BAD */
      return this.$scopedSlots.default();
    },
  };
</script>
