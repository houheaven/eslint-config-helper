
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-type-alias */
/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/adjacent-overload-signatures */

// 正确示例
type Example = () => string;

function foo(example: () => number): number {
  return bar();
}

// returns the function itself, not the `this` argument.
type ReturnsSelf = (arg: string) => ReturnsSelf;

function foo(bar: { (): string; baz: number; }): string {
  return bar();
}

interface Foo {
  bar: string;
}
interface Bar extends Foo {
  (): void;
}

// multiple call signatures (overloads) is allowed:
interface Overloaded {
  (data: string): number;
  (id: number): string;
}
// this is equivelent to Overloaded interface.
type Intersection = ((data: string) => number) & ((id: number) => string);


// 错误示例
interface Example {
  (): string;
}

function foo(example: { (): number; }): number {
  return example();
}

interface ReturnsSelf {
  // returns the function itself, not the `this` argument.
  (arg: string): this;
}
