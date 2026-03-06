
<template>
  <!--
    演示规则
    vue/comma-dangle
    vue/comma-spacing
    vue/comma-style
  -->

  <div>
    <h2>
      {{
        [
          1,
          2,
          3
        ]
      }}
    </h2>
    <h2>{{ [1,2,3] }}</h2>
    <h2>{{ { k1: "v1",k2: "v2",k3: "v3" } }}</h2>
    <h2>
      {{
        {
          k1: "v1",
          k2: "v2",
          k3: "v3"
        }
      }}
    </h2>
  </div>
</template>

<script>
  /* eslint-disable vue/no-unused-properties */
  export default {
    name: "demo",
    data() {
      return {
        show: true,
        arr1: [1,2,3],
        arr2: [
          1,
          2,
          3
        ],
        obj1: { k1: "v1",k2: "v2",k3: "v3" },
        obj2: {
          k1: "v1",
          k2: "v2",
          k3: "v3"
        },
      };
    },
    mounted() {
      // 逗号风格：放在句尾
      const arr = [
        1
        ,2
        ,3
      ];
      const obj = {
        k1: "v1"
        ,k2: "v2"
        ,k3: "v3"
      };
      console.log(arr, obj);
    },
  };
</script>
