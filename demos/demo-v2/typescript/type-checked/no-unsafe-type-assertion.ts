
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

function f() {
  return Math.random() < 0.5 ? 42 : "oops";
}

const z1 = f() as number;
const z2 = f() as number | string;
const z3 = f() as number | string | boolean;

const items = [1, "2", 3, "4"];

const number1 = items[0] as number;
const number2 = items[0] as number | string | undefined;
