
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-non-null-assertion */

interface Foo {
  bar?: string;
  num?: number;
}

const foo: Foo = getFoo();
const isEqualsBar = foo.bar! == "hello";
const isEqualsNum = 1 + foo.num! == 2;
