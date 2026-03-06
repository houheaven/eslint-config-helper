
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unused-vars */

class NoFields {
  constructor() {
    console.log("Hello, world!");
  }
}

class NoFields {}

class NotEmptyClass {
  static version = 42;
}

@logOnRead()
class Constants {
  static readonly version = 42;
}
