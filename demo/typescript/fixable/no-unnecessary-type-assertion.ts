
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable @typescript-eslint/no-unused-vars */

const foo = 3;
const bar = foo!;


const foo = <number>(3 + 5);


type Foo = number;
const foo = <Foo>(3 + 5);


type Foo = number;
const foo = (3 + 5) as Foo;


function foo(x: number): number {
  return x!; // unnecessary non-null
}
