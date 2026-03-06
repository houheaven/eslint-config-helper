
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

// 正确示例
declare const arr: number[];

arr.splice(0, 1);


// 错误示例
declare const arr2: number[];

delete arr2[0];
