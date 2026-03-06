
<template>
  <div>
    <!-- ✓ GOOD -->
    <div class="foo bar"></div>
    <!-- ✗ BAD -->
    <div class="foobar"></div>
    <!--           ^ LINE TABULATION (U+000B) -->
  </div>
</template>

<script>
  export default {
    name: "demo",
    mounted() {
      /* ✓ GOOD */
      const foo = "bar";
      /* ✗ BAD */
      const boo ="bar";
      //       ^ LINE TABULATION (U+000B)
      console.log(foo, boo);
    },
  };
</script>
