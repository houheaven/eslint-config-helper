
<!-- eslint-disable vue/no-unsupported-features -->

<template>
  <list-component>
    <!-- ✓ GOOD -->
    <template v-slot="props">
      {{ props.title }}
    </template>
  </list-component>
  <list-component>
    <!-- ✗ BAD -->
    <template slot-scope="props">
      {{ props.title }}
    </template>
  </list-component>
</template>
