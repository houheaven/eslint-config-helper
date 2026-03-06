
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

const arrowFunctionReturnsPromise = () => Promise.resolve("value");

function functionReturnsPromise() {
  return Promise.resolve("value");
}

function functionReturnsUnionWithPromiseImplicitly(p: boolean) {
  return p ? "value" : Promise.resolve("value");
}
