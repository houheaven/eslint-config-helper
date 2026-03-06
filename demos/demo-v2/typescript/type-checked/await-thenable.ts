
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

// 正确示例
await Promise.resolve("value");
const createValue = async () => "value";
await createValue();

// 错误示例
await "value";
const createValue = () => "value";
await createValue();
