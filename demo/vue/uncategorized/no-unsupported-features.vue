
<template>
  <!-- ✓ GOOD -->
  <my-input :foo.sync="val" />

  <!-- ✗ BAD -->
  <!-- argument on `v-model` -->
  <my-input v-model:foo="val" />
  <!-- custom modifiers on `v-model` -->
  <my-comp v-model.foo.bar="text" />
</template>
