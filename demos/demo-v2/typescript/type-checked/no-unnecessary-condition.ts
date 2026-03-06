
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-return */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

function head(items: string[]) {
  // items can never be nullable, so this is unnecessary
  if (items) {
    return items[0].toUpperCase();
  }
}

function foo(arg: "bar" | "baz") {
  // arg is never nullable or empty string, so this is unnecessary
  if (arg) {
    console.log(arg);
  }
}

function bar(arg: string) {
  // arg can never be nullish, so ?. is unnecessary
  return arg?.length;
}

// Checks array predicate return types, where possible
[
  [1, 2],
  [3, 4],
].filter(t => t); // number[] is always truthy
