
<template>
  <!-- ✗ BAD -->
  <div v-if="$scopedSlots.default"><slot></slot></div>
</template>

<script>
  export default {
    name: "demo",
    render() {
      /* ✗ BAD */
      return this.$scopedSlots.default();
    },
  };
</script>
