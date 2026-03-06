
<template>
  <div>
    <!-- ✓ GOOD -->
    <my-component v-model="foo" />
    <my-component v-model.trim="foo" />
    <my-component v-model.lazy="foo" />
    <my-component v-model.number="foo" />

    <!-- ✗ BAD -->
    <my-component v-model.aaa="foo" />
    <my-component v-model.aaa.bbb="foo" />
  </div>
</template>
