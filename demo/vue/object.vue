
<template>
  <!--
    演示规则
    vue/object-curly-newline
    vue/object-curly-spacing
    vue/object-property-newline
    vue/object-shorthand
    vue/key-spacing
  -->

  <!-- eslint-disable vue/no-undef-properties -->
  <div>
    <h1 :attrs="{a: show, b: show, c, d, e}">hello</h1>
    <h1
      :attrs="{
        a: show, b: show, c, d, e
    }">hello</h1>
    <h1 :attrs="{
      a: show,
      b: show,
      c,
      d,
      e
    }">hello</h1>

    <h2>{{ {a: show, b: show, c, d, e} }}</h2>
    <h2>
      {{ {
        a: show, b: show, c, d, e
      } }}
    </h2>
    <h2>
      {{ {
        a: show,
        b: show,
        c,
        d,
        e,
      } }}
    </h2>
    <p :class="{ opacity:opacityNum }">vue/key-spacing</p>
    <p :class="{ opacity  :   opacityNum }">vue/key-spacing</p>
  </div>
</template>

<script>
  /* eslint-disable no-unused-vars */
  /* eslint-disable no-undef */
  import { a1, b1, c1, d1, e1 } from "./service-a.js";
  import {
    a2, b2, c2, d2, e2
  } from "./service-b.js";
  import {
    a3,
    b3,
    c3,
    d3,
    e3
  } from "./service-c.js";

  const a = 11;
  const b = 11;
  
  export default {
    name: "ObjectDemo",
    data() {
      return {
        show: true,
        opacityNum: 1,
        keySpacing: {
          k1:"v1",
          k2  :  "v2",
        },
        obj1: {a: a, b: b, c, d, e},
        obj2: {
          a: 11, b: 22, c, d, e,
        },
        obj3: {
          a: 11,
          b: 22,
          c,
          d,
          e,
        },
        objNested1: {gp1:[1,2,3]},
        objNested2: {gp1:[1,2,3],gp2:[1,2,{mini:true,num:666}]},
        objNested3: {gp1:{key1:11,key2:22},gp2:{key1:11,key2:22,obj:{mini:true,num:666}}},
        objNested4: {
          gp1:{key1:11,key2:22},
          gp2:{key1:11,key2:22,obj:{mini:true,num:666}},
        },
        objNested5: {
          gp1:[1,2,3],
          gp2:[[1,2,3],[1,2,{mini:true,num:666}]],
          gp3:{key1:11,key2:22,obj:{mini:true,num:666}},
        },
      };
    },
    mounted() {
      /* eslint-disable vue/no-undef-properties */
      const {aa1, bb1, cc1, dd1, ee1} = this.obj1;
      const {
        aa2, bb2, cc2, dd2, ee2
      } = this.obj2;
      const {
        aa3,
        bb3,
        cc3,
        dd3,
        ee3
      } = this.obj3;
    },
  };

  export {};
  export { a1, b1, c1, d1, e1 };
  export {
    a2, b2, c2, d2, e2};
  export {
    a3,
    b3,
    c3,
    d3,
    e3
  };
</script>
