
<template>
  <div>
    <div class="example1">Hello</div>
    <div :class="$style.example2">Hello</div>
    <div class="example3">Hello</div>
  </div>
</template>

<style scoped>
  .example1 {
    color: red;
  }
</style>

<style module>
  .example2 {
    color: blue;
  }
</style>

<style lang="scss">
  .example3 {
    color: green;
  }
</style>
