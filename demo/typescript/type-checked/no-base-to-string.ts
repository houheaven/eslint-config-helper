
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable prefer-template */
/* eslint-disable @typescript-eslint/no-extraneous-class */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/restrict-template-expressions */

// Passing an object or class instance to string concatenation:
"" + {};

class MyClass {}
const value = new MyClass();
value + "";

// Interpolation and manual .toString() and `toLocaleString()` calls too:
`Value: ${value}`;
String({});
({}).toString();
({}).toLocaleString();

// Stringifying objects or instances in an array with the `Array.prototype.join`.
[{}, new MyClass()].join("");
