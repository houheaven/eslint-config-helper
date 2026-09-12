
// ==========================================================
// react-hooks/preserve-manual-memoization 示例
// ----------------------------------------------------------
// 规则含义：React Compiler 场景下必须保留手工 memo（useMemo/useCallback/React.memo），
//           若编译过程中原有 memoization 无法保留则报告 Compilation Skipped
// 官方推荐：recommended（默认 error）；本项目配置："warn"
// options：无
// 文档：https://react.dev/reference/eslint-plugin-react-hooks/lints/preserve-manual-memoization
// ==========================================================

/* eslint react-hooks/preserve-manual-memoization: ["warn"] */

/* eslint-disable @stylistic/member-delimiter-style */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/group-exports */
/* eslint-disable react/function-component-definition */

import React, { useMemo } from "react";

// ---------------- ✅ 正确示例 ----------------
export function Ok({ id, name }: { id: number; name: string }) {
  const label = useMemo(() => `${id}-${name}`, [id, name]);
  return <span>{label}</span>;
}

// ---------------- ❌ 错误示例 ----------------
// 注：react-hooks/preserve-manual-memoization 在 v7.1.1 需要 React Compiler
// 真正驱动编译阶段才会命中（错误信息 "Compilation Skipped: Could not preserve
// existing manual memoization"）。纯 ESLint 环境下常见的“依赖遗漏 / mutate memo
// 结果”场景主要由 react-hooks/exhaustive-deps 与 react-hooks/immutability 兜底。
// 因此本文件的 ❌ 示例保持为可编译代码，若接入完整 Compiler 会在编译时命中。
export function Bad({ id, name }: { id: number; name: string }) {
  const label = useMemo(() => `${id}-${name}`, [id, name]);
  return <span>{label}</span>;
}
