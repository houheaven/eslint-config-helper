
<template>
  <!--
    演示规则
    vue/func-call-spacing
  -->

  <div>
    <button @click="greet('Eric')">greet</button>
    <button @click="greet ('Mike')">greet</button>
  </div>
</template>

<script>
  export default {
    name: "FunctionDemo",
    mounted() {
      this.greet("Eric");
      this.greet ("Mike");
    },
    methods: {
      greet(name) {
        console.log(`hello, ${name}`);
      },
    },
  };
</script>
