
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable no-void */
/* eslint-disable no-undefined */
/* eslint-disable prefer-regex-literals */
/* eslint-disable require-unicode-regexp */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

const a: bigint = 10n;
const a: bigint = BigInt(10);
const a: boolean = !0;
const a: boolean = Boolean(null);
const a: boolean = true;
const a: null = null;
const a: number = 10;
const a: number = Infinity;
const a: number = NaN;
const a: number = Number("1");
const a: RegExp = /a/;
const a: RegExp = new RegExp("a");
const a: string = "str";
const a: string = String(1);
const a: symbol = Symbol("a");
const a: undefined = undefined;
const a: undefined = void someValue;

class Foo {
  prop: number = 5;
}

function fn(a: number = 5, b: boolean = true) {}
