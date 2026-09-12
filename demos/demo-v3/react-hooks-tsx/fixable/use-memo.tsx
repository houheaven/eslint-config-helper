// ==========================================================
// react-hooks/use-memo 示例
// ----------------------------------------------------------
// 规则含义：useMemo 常见误用检查（如依赖非数组字面量、非内联函数等）
// 官方推荐：recommended（默认 error）；本项目配置："warn"
// options：无
// 文档：https://react.dev/reference/eslint-plugin-react-hooks/lints/use-memo
// ==========================================================

/* eslint react-hooks/use-memo: ["warn"] */

/* eslint-disable @stylistic/member-delimiter-style */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/group-exports */
/* eslint-disable react/function-component-definition */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useMemo } from "react";

// ---------------- ✅ 正确示例 ----------------
export function Ok({ list }: { list: number[] }) {
  const total = useMemo(() => list.reduce((a, b) => a + b, 0), [list]);
  return <span>{total}</span>;
}

// ---------------- ❌ 错误示例 ----------------
export function Bad({ list, id }: { list: number[]; id: number }) {
  // useMemo 依赖列表不能是变量，必须是数组字面量
  const deps = [list, id];
  const total = useMemo(() => list.reduce((a, b) => a + b, 0), deps);
  return <span>{total}</span>;
}
