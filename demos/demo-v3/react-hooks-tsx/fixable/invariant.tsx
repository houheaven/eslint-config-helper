// ==========================================================
// react-hooks/invariant 示例
// ----------------------------------------------------------
// 规则含义：捕捉 React Compiler 编译过程中触发的内部不变量（Invariant）
// 官方推荐：无；本项目配置："off"（demo 中 inline 打开为 "warn"）
// options：无
// 文档：https://react.dev/reference/eslint-plugin-react-hooks/lints/invariant
// ----------------------------------------------------------
// 说明：该规则属于 React Compiler 内部不变量校验，只有在 Compiler
// 编译流水线发现自身状态矛盾时才会命中；在纯 lint 上下文中
// 几乎无法通过业务代码构造出触发条件，因此此文件仅保留 ✅
// 组件作为占位示例（占位型）。
// ==========================================================

/* eslint react-hooks/invariant: ["warn"] */

/* eslint-disable @stylistic/member-delimiter-style */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/prefer-default-export */

import React from "react";

// ---------------- ✅ 正确示例 ----------------
export function Ok({ value }: { value: string }) {
  return <span>{value}</span>;
}
