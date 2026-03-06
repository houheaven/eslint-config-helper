
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-unused-vars */

// overrideMethods
abstract class Base {
  protected greet(): void {
    console.log("Hello!");
  }
}

class Foo extends Base {
  protected override greet(): void {}
}
