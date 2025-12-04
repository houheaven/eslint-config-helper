
/* eslint-disable no-unused-vars */
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
  name: "ObjectCurlyNewline",
  data() {
    return {
      show: true,
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
      obj4: { aa: 11, bb: 22, cc: 33 },
      obj5: { aa: 11 },
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
