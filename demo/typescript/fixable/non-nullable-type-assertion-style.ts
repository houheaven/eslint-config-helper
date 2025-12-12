
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable no-undefined */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/consistent-type-assertions */

// 正确示例
const maybe: string | undefined = Math.random() > 0.5 ? "" : undefined;

const definitely = maybe!;
const alsoDefinitely = maybe!;


// 错误示例
const maybe2: string | undefined = Math.random() > 0.5 ? "" : undefined;

const definitely2 = maybe2 as string;
const alsoDefinitely2 = <string>maybe2;
