
<!-- eslint-disable vue/no-multi-spaces -->
<!-- eslint-disable vue/object-curly-spacing -->

<template>
  <!--
    演示规则
    vue/array-bracket-newline
    vue/array-bracket-spacing
    vue/array-element-newline
  -->

  <div>
    <p>{{ [1, 2, 3] }}</p>
    <p>
      {{ [
        1, 2, 3,
      ] }}
    </p>
    <p>
      {{ [
        1, 2, 3] }}
    </p>
    <p>
      {{ [1, 2, 3,
      ] }}
    </p>

    <p>
      {{ [
        1, 2,
        3,
      ] }}
    </p>

    <p>{{ [1, 2, 3] }}</p>
    <p>{{ [ 1, 2, 3 ] }}</p>
    <p :attrs="[   1, 2,    3, 4, 5  ]">hello</p>
    <p :attrs="[   1  ]">hello</p>
    <p :attrs="[   { k1: 'v1' }  ]">hello</p>
    <p :attrs="[   {k1: 'v1' }, { k2: 'v2' }  ]">hello</p>
    <p :attrs="[ ['a1'] ]">hello</p>
    <p :attrs="[  ['a1'], ['a2'] ]">hello</p>
  </div>
</template>

<script>
  /* eslint-disable no-multi-spaces */
  /* eslint-disable vue/no-unused-properties */
  
  export default {
    name: "demo",
    data() {
      return {
        arr: [1, 2, 3],
        arr2: [  1, 2, 3   ],
      };
    },
  };
</script>
