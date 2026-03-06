
<!-- eslint-disable vue/v-on-handler-style -->

<template>
  <div>
    <button @click="(evt)=>{ console.log(evt) }">login</button>
  </div>
</template>

<script>
  /* eslint-disable vue/no-unused-properties */
  export default {
    name: "demo",
    data() {
      return {
        log() { console.log(2222); },
      };
    },
    methods: {
      foo() { console.log(3333); },
    },
  };
</script>
