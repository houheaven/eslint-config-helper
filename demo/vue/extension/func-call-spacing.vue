
<template>
  <div>
    <button @click="greet('Eric')">greet</button>
    <button @click="greet ('Mike')">greet</button>
  </div>
</template>

<script>
  export default {
    name: "demo",
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
