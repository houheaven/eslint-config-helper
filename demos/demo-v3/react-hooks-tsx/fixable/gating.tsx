// ==========================================================
// react-hooks/gating 示例
// ----------------------------------------------------------
// 规则含义：校验 React Compiler 的 gating 配置及 `"use memo if(...)"` 动态指令
// 官方推荐：recommended（默认 error）；本项目配置："warn"（默认场景不触发）
// options：无
// 文档：https://react.dev/reference/react-compiler/gating
// ----------------------------------------------------------
// 说明：该规则仅在启用 React Compiler + gating（含 dynamicGating）
// 场景下命中，需通过 Compiler options 显式配置才会触发；
// 在未启用 Compiler 的 lint 环境下无法通过业务代码触发。
// 此文件仅保留 ✅ 组件作为占位示例（占位型）。
// ==========================================================

/* eslint react-hooks/gating: ["warn"] */

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
