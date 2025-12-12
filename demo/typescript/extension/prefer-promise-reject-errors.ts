
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable max-classes-per-file */
/* eslint-disable no-promise-executor-return */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */


// 正确示例
Promise.reject(new Error());

class CustomError extends Error {
  // ...
}
Promise.reject(new CustomError());

new Promise((resolve, reject) => reject(new Error()));

new Promise((resolve, reject) => {
  class CustomError extends Error {
    // ...
  }
  return reject(new CustomError());
});

// 错误示例
Promise.reject("error");

const err = new Error();
Promise.reject(`an ${err}`);

new Promise((resolve, reject) => reject("error"));

new Promise((resolve, reject) => {
  const err = new Error();
  reject(`an ${err}`);
});

// Promise.reject 中使用字符串
Promise.reject("错误信息");

// Promise.reject 中使用非 Error 对象
Promise.reject({ message: "错误信息", code: 500 });
