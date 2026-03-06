
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/parameter-properties */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

function f(a = 0, b: number) {}
function f(a: number, b = 0, c: number) {}
function f(a: number, b?: number, c: number) {}

class Foo {
  constructor(
    public a = 10,
    private b: number
  ) {}
}

class Foo {
  constructor(
    public a?: number,
    private b: number
  ) {}
}
