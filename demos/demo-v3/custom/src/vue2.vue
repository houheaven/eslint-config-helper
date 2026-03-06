
<template>
  <div>
    <!--
      规则: vue/v-bind-style
      等级: warn
    -->

    <div>
      <div :id="id">content</div>
      <div v-bind:id="id">content</div>
    </div>

    <!--
      规则: vue/no-static-inline-styles
      等级: error
    -->
    
    <div>
      <div style="color: pink;"></div>
      <div :style="{ color: 'pink' }"></div>
      <div :style="[{ color: 'pink' }, { 'font-size': '85%' }]"></div>
      <div :style="{ backgroundImage, color: 'pink' }"></div>
    </div>
  </div>
</template>

<script>
  // 规则: import/no-empty-named-blocks
  // 等级: warn

  import {} from "mod";
  import Default, {} from "mod";
  
  export default {
    name: "demo",
    props: {
      // 规则: vue/no-boolean-default
      // 等级: error
      p1: {
        type: Boolean,
        default: true,
      },
      p2: {
        type: Boolean,
      },
    },
    // 规则: vue/no-shared-component-data
    // 等级: warn
    data: {
      foo: 'bar',
    },
    watch: {
      p1() {
        console.log(6666);
      },
      // 规则: object-shorthand
      // 等级: warn
      p2: val => {
        console.log(val);
      },
    },
  };
</script>
