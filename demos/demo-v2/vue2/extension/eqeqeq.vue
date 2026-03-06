
<template>
  <div>
    <h1>{{ str == "hello" }}</h1>
  </div>
</template>

<script>
  export default {
    name: "demo",
    data() {
      return {
        str: "hello",
      };
    },
    mounted() {
      console.log(this.str == "hello");
    },
  };
</script>
