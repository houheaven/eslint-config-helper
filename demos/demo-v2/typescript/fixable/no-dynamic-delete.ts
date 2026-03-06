
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/consistent-indexed-object-style */

// 正确示例
const container: { [i: string]: number } = {
  /* ... */
};

// 常量运行时按字符串索引查找
delete container.aaa;

// 必须通过 [] 访问的常量
delete container[7];
delete container[-1];

// 所有字符串都被允许，以兼容 noPropertyAccessFromIndexSignature TS 编译器选项
delete container["aaa"];
delete container["Infinity"];

// 错误示例
// 动态、难以推理的查找
const name = "name";
delete container[name];
delete container[name.toUpperCase()];
