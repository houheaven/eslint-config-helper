
<!-- eslint-disable vue/v-on-style -->

<template>
  <!-- ✓ GOOD -->
  <input v-on:keyup.page-down="onArrowUp" />
  <input @keyup.page-down="onArrowUp" />
  <input @keyup.9="onArrowUp" /> <!-- 9 is KeyboardEvent.key -->

  <!-- ✗ BAD -->
  <input v-on:keyup.34="onArrowUp" />
  <input @keyup.34="onArrowUp" />
</template>
