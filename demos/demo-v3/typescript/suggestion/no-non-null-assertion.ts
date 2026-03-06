
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

interface Example {
  property?: string;
}
declare const example: Example;

// 正确示例
const includesBaz = example.property?.includes("baz") ?? false;

// 错误示例
const includesBax = example.property!.includes("baz");
