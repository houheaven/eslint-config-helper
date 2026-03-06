
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable no-undefined */
/* eslint-disable no-unreachable */
/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-extraneous-class */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

// 正确示例
throw new Error();

throw new Error("error");

const e = new Error("error");
throw e;

function getError() {
  return new Error();
}
throw getError();

const foo = {
  bar: new Error(),
};
throw foo.bar;

class CustomError extends Error {
  // ...
}
throw new CustomError();


// 错误示例
throw "error";

throw 0;

throw undefined;

function getErrorString(): string {
  return "";
}
throw getErrorString();

const foo2 = {
  bar: "error string",
};
throw foo2.bar;

class SomeClass {
  // ...
}
throw new SomeClass();

// allowThrowingAny
function throwAny(value: any) {
  throw value;
}

// allowThrowingUnknown
function throwUnknown(value: unknown) {
  throw value;
}
