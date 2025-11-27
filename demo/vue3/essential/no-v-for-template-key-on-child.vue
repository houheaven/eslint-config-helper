
<template>
  <!-- ✓ GOOD -->
  <template v-for="todo in todos" :key="todo">
    <foo />
  </template>

  <!-- ✗ BAD -->
  <template v-for="todo in todos">
    <foo :key="todo" />
  </template>
</template>
