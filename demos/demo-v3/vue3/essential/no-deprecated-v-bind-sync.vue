
<!-- eslint-disable vue/v-bind-style -->
<!-- eslint-disable vue/attribute-hyphenation -->

<template>
  <!-- ✓ GOOD -->
  <my-component v-bind:propName="foo" />
  <my-component :propName="foo" />

  <!-- ✗ BAD -->
  <my-component v-bind:propName.sync="foo" />
  <my-component v-bind:[dynamiArg].sync="foo" />
  <my-component v-bind.sync="foo" />
  <my-component :propName.sync="foo" />
</template>
