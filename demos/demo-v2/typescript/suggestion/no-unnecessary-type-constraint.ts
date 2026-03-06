
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/consistent-type-definitions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

interface FooAny<T extends any> {}

interface FooUnknown<T extends unknown> {}

type BarAny<T extends any> = {};

type BarUnknown<T extends unknown> = {};

class BazAny<T extends any> {
  quxAny<U extends any>() {}
}

const QuuxAny = <T extends any>() => {};

function QuuzAny<T extends any>() {}
