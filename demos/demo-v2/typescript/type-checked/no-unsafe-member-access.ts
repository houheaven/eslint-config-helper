
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-expressions */

declare const anyVar: any;
declare const nestedAny: { prop: any; };

anyVar.a;
anyVar.a.b;
anyVar["a"];
anyVar["a"]["b"];

nestedAny.prop.a;
nestedAny.prop["a"];

const key = "a";
nestedAny.prop[key];

// Using an any to access a member is unsafe
const arr = [1, 2, 3];
arr[anyVar];
nestedAny[anyVar];


declare const outer: any;

outer?.inner;
outer?.middle?.inner;
