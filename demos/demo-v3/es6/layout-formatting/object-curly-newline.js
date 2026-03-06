
/* eslint-disable no-undef */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-pattern */
/* eslint-disable object-curly-spacing */
/* eslint-disable object-property-newline */
/* eslint-disable import/first */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/group-exports */
/* eslint-disable import/no-unresolved */

// 对象字面量
let empty1 = {};
let empty2 = {
};
let a = { foo: 1 };
let a2 = { foo: 1, foo2: 2, foo3: 3 };
let b = {
  foo: 1,
};
let c = {
  foo: 1, bar: 2, bar2: 2 };
let c2 = { foo: 1, bar: 2,
  bar2: 2 };
let d = {
  foo: 1,
  bar: 2,
};
let e = { foo: function() { dosomething(); } };
let f = {
  foo: function() {
    dosomething();
  },
};

// 解构赋值
let {} = obj;
let {
} = obj;
let { g } = obj;
let {
  h,
} = obj;
let { i, j } = obj;
let {
  k, l,
} = obj;
let {m,
  n} = obj;
let {
  o,
  p,
} = obj;
let { q = function() { dosomething(); } } = obj;
let {
  r = function() {
    dosomething();
  },
} = obj;

// 导入模块
import { foo, bar, too } from "foo-bar";
import { foo2, bar2, too2 } from "foo-bar";
import { foo as foo3, bar3, too3 } from "foo-bar";
import { foo4,
  bar4, too4 } from "foo-bar";

// 导出模块
export { foo };
export {
  foo as fooo };
export { foo2, bar2 };
export { foo3, bar3,
  too3 };
export {
  foo3 as foo4,
  bar3 as bar4, too3 as too4,
};
export {
  foo as foo5,
  bar5,
} from "foo-bar";
