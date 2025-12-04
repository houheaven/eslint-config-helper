
<template>
  <div>
    <button @click="(evt)=>{ console.log(evt) }">login</button>
  </div>
</template>

<script>
  export default {
    name: "ArrowSpacing",
    data() {
      return {
        show: true,
        log: ()=>{ console.log(2222); },
      };
    },
    methods: {
      foo: ()=>{ console.log(3333); },
    },
  };
</script>
