
// ==========================================================
// react-hooks/memo-dependencies 示例
// ----------------------------------------------------------
// 规则含义：校验 useMemo / useCallback 依赖列表穷尽且不含多余项
// 官方推荐：无；本项目配置："off"
// options：无
// 文档：https://react.dev/reference/eslint-plugin-react-hooks/lints/memo-dependencies
// ==========================================================

/* eslint react-hooks/memo-dependencies: ["warn"] */

/* eslint-disable @stylistic/member-delimiter-style */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/group-exports */
/* eslint-disable react/function-component-definition */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useMemo } from "react";

// ---------------- ✅ 正确示例 ----------------
export function Ok({ a, b }: { a: number; b: number }) {
  const sum = useMemo(() => a + b, [a, b]);
  return <span>{sum}</span>;
}

// ---------------- ❌ 错误示例 ----------------
export function Bad({ a, b }: { a: number; b: number }) {
  // 依赖数组遗漏了 b，触发 memo-dependencies
  const sum = useMemo(() => a + b, [a]);
  return <span>{sum}</span>;
}
