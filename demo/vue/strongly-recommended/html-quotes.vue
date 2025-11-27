
<template>
  <div>
    <!-- ✓ GOOD -->
    <img title='a string containing "double" quotes' />
    <img title="a string containing 'double' quotes" />

    <!-- ✗ BAD -->
    <img title='foo' />
    <img title=bar />
  </div>
</template>
