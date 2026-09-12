// ==========================================================
// react-hooks/syntax 示例
// ----------------------------------------------------------
// 规则含义：校验源码是否包含 React Compiler 无法解析的语法结构
// 官方推荐：无（Compiler 内部规则）；本项目配置："off"（demo 中 inline 打开为 "warn"）
// options：无
// 文档：https://react.dev/reference/eslint-plugin-react-hooks/lints/syntax
// ----------------------------------------------------------
// 说明：该规则用于捕获 React Compiler 无法解析的语法节点（例如
// 保留字命名的标识符、非法的 JSX 命名空间等）；这些边界通常在
// Babel 解析阶段就被拦截，因此在 ESLint 纯 lint 环境中很难通过
// 合法 TS/JSX 源码构造出触发条件。此文件仅保留 ✅ 组件作为
// 占位示例（占位型）。
// ==========================================================

/* eslint react-hooks/syntax: ["warn"] */

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
