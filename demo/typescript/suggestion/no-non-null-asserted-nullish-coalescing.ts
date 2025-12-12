
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable @typescript-eslint/init-declarations */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */

foo! ?? bar;
foo.bazz! ?? bar;
foo!.bazz! ?? bar;
foo()! ?? bar;

let x!: string;
x! ?? "";

let x: string;
x = foo();
x! ?? "";
