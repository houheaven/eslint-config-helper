
<template>
  <div>
    <div rule="vue/html-button-has-type">
      <!-- ✓ GOOD -->
      <button type="button">Hello World</button>
      <button type="submit">Hello World</button>
      <button type="reset">Hello World</button>
      <!-- ✗ BAD -->
      <button>Hello World</button>
      <button type="">Hello World</button>
      <button type="foo">Hello World</button>
    </div>
  </div>
</template>
