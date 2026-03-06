
<!-- eslint-disable vue/v-on-style -->

<template>
  <!-- ✓ GOOD -->
  <my-component v-on:custom-event="handleEvent" />
  <my-component @custom-event="handleEvent" />

  <!-- ✗ BAD -->
  <my-component v-on:customEvent="handleEvent" />
  <my-component @customEvent="handleEvent" />
</template>
