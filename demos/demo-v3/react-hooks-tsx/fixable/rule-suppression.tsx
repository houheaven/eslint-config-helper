// ==========================================================
// react-hooks/rule-suppression 示例
// ----------------------------------------------------------
// 规则含义：禁止使用 eslint-disable(-next-line) 抑制其它 react-hooks 规则
// 官方推荐：无；本项目配置："off"（demo 中 inline 打开为 "warn"）
// options：无
// 文档：https://react.dev/reference/eslint-plugin-react-hooks/lints/rule-suppression
// ----------------------------------------------------------
// 说明：该规则在 eslint-plugin-react-hooks v7.1.1 需要 React Compiler
// 编译上下文识别到被 suppress 的 exhaustive-deps / rules-of-hooks 才会命中，
// 在纯 lint 且未启用 Compiler 编译模式时几乎无法触发，
// 因此此文件仅保留 ✅ 组件作为占位示例（占位型）。
// ==========================================================

/* eslint react-hooks/rule-suppression: ["warn"] */

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
