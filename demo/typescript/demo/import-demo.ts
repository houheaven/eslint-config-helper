
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-import-type-side-effects */

// 演示示例
// import/consistent-type-specifier-style

// ["warn", "prefer-top-level"]
import type Foo from "Foo";
import type { Bar } from "Bar";

// ["warn", "prefer-inline"]
import { type Foo2 } from "Foo2";
import { type Bar2 } from "Bar2";
