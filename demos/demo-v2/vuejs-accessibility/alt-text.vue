
<template>
  <!--
    演示规则
    vuejs-accessibility/alt-text
  -->

  <div>
    <div rule="success">
      <img src="foo" alt="Foo eating a sandwich." />
      <img src="foo" :alt="altText" />
      <img src="foo" alt="" />

      <object aria-label="foo"></object>
      <object aria-labelledby="id1"></object>
      <object>Meaningful description</object>
      <object title="An object"></object>

      <area aria-label="foo" />
      <area aria-labelledby="id1" />
      <area alt="This is descriptive!" />

      <input type="image" alt="This is descriptive!" />
      <input type="image" aria-label="foo" />
      <input type="image" aria-labelledby="id1" />
    </div>

    <div class="fail">
      <img src="foo" />
      <img alt />
      <!-- Has no value -->
      <img src="foo" role="presentation" />
      <!-- Avoid ARIA if it can be achieved without -->
      <img src="foo" role="none" />
      <!-- Avoid ARIA if it can be achieved without -->

      <object></object>
      <area />
      <input type="image" />
    </div>
  </div>
</template>

<script>
  export default {
    name: "alt-text",
  };
</script>
