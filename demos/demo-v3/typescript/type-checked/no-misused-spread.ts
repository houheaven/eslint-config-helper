
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable no-extra-parens */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */

declare const promise: Promise<number>;
const spreadPromise = { ...promise };

declare function getObject(): Record<string, string>;
const getObjectSpread = { ...getObject };

declare const map: Map<string, number>;
const mapSpread = { ...map };

declare const userName: string;
const characters = [...userName];

// ===== 错误用例 =====
// 用例1: 数组展开对象
const user = { id: 1, name: "Alice" };
const invalidArray = [...user]; // ❌

// 用例2: 对象展开字符串
const text = "abc";
const invalidObj = { ...text }; // ❌

// 用例3: 对象展开null
const emptyVal = null;
const pointlessObj = { ...emptyVal }; // ❌

// ===== 正确用例 =====
// 正确1: 展开数组
const numbers = [1, 2];
const validArray = [0, ...numbers, 3]; // ✅

// 正确2: 展开对象
const base = { a: 1 };
const validObj = { ...base, b: 2 }; // ✅

// 正确3: 条件展开
const optionalData = Math.random() > 0.5 ? { value: 42 } : null;
const safeObj = {
  ...(optionalData || {}), // ✅ 空对象兜底
  required: true,
};
