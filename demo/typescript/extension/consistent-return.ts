
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable no-useless-return */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-invalid-void-type */

// 正确示例
function foo(): void {}
function bar(flag: boolean): void {
  if (flag) return foo();
  return;
}

async function baz(flag: boolean): Promise<void | number> {
  if (flag) return 42;
  return;
}

// 错误示例
function foo2(): undefined {}
function bar2(flag: boolean): undefined {
  if (flag) return foo();
  return;
}

async function baz2(flag: boolean): Promise<undefined> {
  if (flag) return;
  return foo();
}
