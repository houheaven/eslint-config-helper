
<template>
  <list-component>
    <!-- ✓ GOOD -->
    <template v-slot:name>
      {{ props.title }}
    </template>
  </list-component>
  <list-component>
    <!-- ✗ BAD -->
    <template slot="name">
      {{ props.title }}
    </template>
  </list-component>
</template>
