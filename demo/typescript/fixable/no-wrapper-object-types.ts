
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/init-declarations */

// 正确示例
let myBigint: bigint;
let myBoolean: boolean;
let myNumber: number;
let myString: string;
let mySymbol: symbol;

let myObject: object = "Type 'string' is not assignable to type 'object'.";


// 错误示例
let myBigInt: BigInt;
let myBoolean: Boolean;
let myNumber: Number;
let myString: String;
let mySymbol: Symbol;

let myObject: Object = "allowed by TypeScript";
