
<template>
  <!--
    演示规则
    vue/array-bracket-newline
    vue/array-bracket-spacing
  -->

  <div>
    <h1 :attrs="[{ title: show },{ visible: show }]">hello</h1>
    <h2>{{ [1,2, 3,4] }}</h2>
    <h1 :attrs="[   1,2,  3,4,5  ]">hello</h1>
    <h2>{{ [ 1, 2, 3, 4 ] }}</h2>
  </div>
</template>

<script>
  export default {
    name: "ArrayDemo",
    data() {
      return {
        show: true,
        arr: [1, 2, 3],
        arr2: [  1, 2, 3   ],
      };
    },
    mounted() {
      const a = [];
      const b = [1];
      const c = [1, 2];
      const d = [1,
        2];
      const e = [function foo() {
        console.log(1111);
      }];
      console.log(a, b, c, d, e);

      const correct = [1, 2, 3];
      const wrong = [  1, 2, 3   ];
      console.log(correct, wrong);
    },
  };
</script>
