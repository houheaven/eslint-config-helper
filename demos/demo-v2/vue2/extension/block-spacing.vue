
<!-- eslint-disable vue/v-on-handler-style -->

<template>
  <div>
    <button @click="(evt) => {console.log(evt);}">login</button>
    <button @click="(evt) => { console.log(evt); }">login</button>
  </div>
</template>

<script>
  /* eslint-disable vue/no-unused-properties */
  export default {
    name: "demo",
    methods: {
      boo() {console.log(2222);},
      foo() { console.log(3333); },
    },
  };
</script>
