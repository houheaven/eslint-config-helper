
/* eslint-disable @typescript-eslint/array-type */

// ====================================================

// 数组的类型声明
// 1. 类型[]
// 2. Array<类型>

let arr: number[];
arr = [1, 2, 3];
arr = [1, 2, 3, "a"];      // 报错
arr = ["a", "b", "c"];     // 报错

let arr2: Array<number>;
arr2 = [1, 2, 3];
arr2 = ["a", "b", "c"];    // 报错

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
function Sum(...args: Array<number>) {
  // 每一项参数必须是数字
  return args.reduce((sum, num) => sum += num, 0);
}

Sum(10, 20, 3.5);
Sum(1, 2, 3, "666");      // 报错

// ====================================================

// 避免污染全局变量
export default undefined;
