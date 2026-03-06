
<template>
  <div>
    <!-- 对象字面量 -->
    <div :class="{ active: isActive, disabled: disabled }"></div>
    
    <!-- 对象方法 -->
    <button :test="{ handleClick() { console.log('click') } }">Click</button>
    <button :test="{ handleClick: () => { console.log('click') } }">Click</button>
    <button :test="{ handleClick: function() { console.log('click') } }">Click</button>
  </div>
</template>

<script>
  /* eslint-disable vue/no-unused-properties */
  /* eslint-disable vue/no-arrow-functions-in-watch */
  export default {
    name: "demo",
    data: function() {
      return {
        foo: "bar",
        isActive: true,
        disabled: false,
      };
    },
    watch: {
      p1() {
        console.log(6666);
      },
      p2: val => {
        console.log(val);
      },
      p3: function() {
        console.log(7777);
      },
    },
    mounted() {
      const a = 1;
      const b = 2;
      const obj2 = {
        a: a,
        b: b,
        sum: function() {
          return a + b;
        },
      };
      console.log(obj2);
    },
    methods: {
      fn1: function() {
        console.log("fn1");
      },
      fn2: function(x) {
        return x;
      },
    },
  };
</script>
