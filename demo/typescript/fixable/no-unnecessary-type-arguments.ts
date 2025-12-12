
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-extraneous-class */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

function f<T = number>() {}
f<number>();


function g<T = number, U = string>() {}
g<string, string>();


class C<T = number> {}
new C<number>();

class D extends C<number> {}


interface I<T = number> {}
class Impl implements I<number> {}
