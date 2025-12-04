
<template>
  <div>
    <button @click="(evt) => {console.log(evt);}">login</button>
  </div>
</template>

<script>
  export default {
    name: "BlockSpacing",
    data() {
      return {
        boo: () => {console.log(2222);},
      };
    },
    methods: {
      foo: () => {console.log(3333);},
    },
  };
</script>
