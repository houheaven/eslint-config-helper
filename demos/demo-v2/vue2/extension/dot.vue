
<template>
  <!--
    演示规则
    vue/dot-location
    vue/dot-notation
  -->

  <div>
    <h2>{{ obj.k1 }} {{ obj.k_02 }} {{ obj["k-01"] }}</h2>
    <h2>{{ obj["k1"] }} {{ obj["k_02"] }} {{ obj["k-01"] }}</h2>
  </div>
</template>

<script>
  export default {
    name: "demo",
    data() {
      return {
        obj: {
          "k1": "v1",
          "k2": "v2",
          "k-01": "v3",
          "k_02": "v4",
          "greet": () => {
            console.log("hello");
          },
        },
      };
    },
    mounted() {
      this.obj
        .greet();
      this.obj.
        greet();
      
      console.log(this.obj.k1);
      console.log(this.obj.k_02);
      console.log(this.obj["k1"]);
      console.log(this.obj["k-01"]);
      console.log(this.obj["k_02"]);
    },
  };
</script>
