
<template>
  <div>
    <!-- ✓ GOOD -->
    <div @click="$emit('good')"></div>
    <!-- ✗ BAD -->
    <div @click="$emit('bad')"></div>
  </div>
</template>

<script>
  export default {
    name: "demo",
    emits: ["good"],
    setup(props, context) {
      // ✓ GOOD
      context.emit("good");
      // ✗ BAD
      context.emit("bad");
    },
    methods: {
      foo() {
        // ✓ GOOD
        this.$emit("good");
        // ✗ BAD
        this.$emit("bad");
      },
    },
  };
</script>
