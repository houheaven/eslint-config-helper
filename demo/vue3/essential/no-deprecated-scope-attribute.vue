
<!-- eslint-disable vue/no-unsupported-features -->
<!-- eslint-disable vue/no-deprecated-slot-attribute -->
<!-- eslint-disable vue/no-deprecated-slot-scope-attribute -->

<template>
  <list-component>
    <!-- ✓ GOOD -->
    <template v-slot:name="props">
      {{ props.title }}
    </template>
    <template slot="name" slot-scope="props">
      {{ props.title }}
    </template>
  </list-component>
  <list-component>
    <!-- ✗ BAD -->
    <template slot="name" scope="props">
      {{ props.title }}
    </template>
  </list-component>
</template>
