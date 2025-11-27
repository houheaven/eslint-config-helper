
<!-- eslint-disable vue/component-name-in-template-casing -->

<template>
  <div rule="vue/no-unused-components">
    <componentA />
    <component-a />
    <component :is="compA" />
  </div>
</template>

<script>
  /* eslint-disable import/no-unresolved */
  import componentA from "../components/componentA.vue";
  export default {
    name: "demo",
    components: {
      componentA,
    },
    computed: {
      compA() {
        return componentA;
      },
    },
  };
</script>
