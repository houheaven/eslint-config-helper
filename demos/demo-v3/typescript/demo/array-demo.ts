
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable @typescript-eslint/array-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/init-declarations */

// ====================================================

// 数组的类型声明
// 1. 类型[]
// 2. Array<类型>

let numArr: number[];
numArr = [1, 2, 3];
numArr = [1, 2, 3, "a"];      // 报错
numArr = ["a", "b", "c"];     // 报错

let numArr2: Array<number>;
numArr2 = [1, 2, 3];
numArr2 = [1, 2, 3, "a"];     // 报错
numArr2 = ["a", "b", "c"];    // 报错

// ====================================================

// 混合数组
// 1. (类型|类型)[]
// 2. Array<类型|类型>

let mixArr: (number|string)[];
mixArr = [11, 22, "number"];
mixArr = [11, 22, "number", true];     // 报错

let mixArr2: Array<number|string>;
mixArr2 = [11, 22, "number"];
mixArr2 = [11, 22, "number", false];   // 报错

// ====================================================

// demo
function Sum(...args: number[]): number {
  // 每一项参数必须是数字
  return args.reduce((sum, num) => sum + num, 0);
}

Sum(10, 20, 3.5);
Sum(1, 2, 3, "666");      // 报错

// ====================================================
