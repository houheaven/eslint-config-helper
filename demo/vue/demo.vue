
<template>
  <div>
    <div style="color: pink;"></div>
    <div :style="{ color: 'pink' }"></div>
    <div :style="[ { color: 'pink' }, { 'font-size': '85%' } ]"></div>
    <div :style="{ backgroundImage, color: 'pink' }"></div>

    <div :class="'static-class'" />
    <div :class="{'static-class': true, 'dynamic-class': foo}" />
    <div :class="['static-class', dynamicClass]" />

    <!-- ✗ BAD -->
    {{ 'Lorem ipsum' }}
    {{ "Lorem ipsum" }}
    {{ `Lorem ipsum` }}
    <div v-bind:foo="'bar'"></div>
    <div :foo="'bar'"></div>
  </div>
</template>

<script>
export default {
  name: "demo",
  props: {
    num: {
      type: Number,
      default: 0,
    }
  },
  data() {
    return {
      str: "hello",
      nums: 6,
      obj: {
        key: "val",
      },
    };
  },
  computed: {
    numMap() {
      return this.num + 1;
    },
  },
  watch: {
    str() {
      console.log(6666);
    },
    nums: val => {
      console.log(val);
    },
    obj: {
      handler() {},
      deep: true,
    },
  },
  init() {

  },
  mounted() {
    switch(true) {
      case this.num === 0:
        console.log(1111);
        break;
      default:
        console.log(2222);
    }
  }
};
</script>

<style>
    .box {
        color: #f66;
    }
</style>
