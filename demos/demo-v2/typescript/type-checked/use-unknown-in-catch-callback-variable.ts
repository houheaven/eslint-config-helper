
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable @typescript-eslint/no-explicit-any */

Promise.reject(new Error("I will reject!")).catch((err: unknown) => {
  console.log(err);
});

Promise.reject(new Error("I will reject!")).catch(err => {
  console.log(err);
});

Promise.reject(new Error("I will reject!")).catch((err: any) => {
  console.log(err);
});

Promise.reject(new Error("I will reject!")).catch((err: Error) => {
  console.log(err);
});

Promise.reject(new Error("I will reject!")).then(
  result => {
    console.log(result);
  },
  err => {
    console.log(err);
  }
);
