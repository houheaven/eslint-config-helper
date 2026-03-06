
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-redeclare */

// 正确示例
let foo = "bar";
let foo = "bar" as const;
let foo: "bar" = "bar" as const;
let bar = "bar" as string;
let foo = <string>"bar";
let foo = { bar: "baz" };

// 错误示例
let bar: 2 = 2;
let foo = <"bar">"bar";
let foo = { bar: "baz" as "baz" };
