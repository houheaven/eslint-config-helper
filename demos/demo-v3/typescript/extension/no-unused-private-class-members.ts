
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable @typescript-eslint/no-unused-vars */

class A {
  private foo = 123;
  private bar = 123;
  baz = "hello";

  constructor() {
    console.log(this.foo);
  }
}
