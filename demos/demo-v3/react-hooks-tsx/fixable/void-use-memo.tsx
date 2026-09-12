
// ==========================================================
// react-hooks/void-use-memo 示例
// ----------------------------------------------------------
// 规则含义：useMemo 必须返回值，且返回值必须被使用
// 官方推荐：无（recommended-latest 启用为 error）；本项目配置："warn"
// options：无
// 文档：https://react.dev/reference/eslint-plugin-react-hooks/lints/void-use-memo
// ==========================================================

/* eslint react-hooks/void-use-memo: ["warn"] */

/* eslint-disable @stylistic/member-delimiter-style */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/group-exports */
/* eslint-disable react/function-component-definition */

import React, { useMemo } from "react";

declare const externalSink: (n: number) => void;

// ---------------- ✅ 正确示例 ----------------
export function Ok({ list }: { list: number[] }) {
  const total = useMemo(() => list.reduce((a, b) => a + b, 0), [list]);
  return <span>{total}</span>;
}

// ---------------- ❌ 错误示例 ----------------
export function Bad({ list }: { list: number[] }) {
  // useMemo 回调无 return，等于把副作用挂在 useMemo 里
  useMemo(() => {
    externalSink(list.length);
  }, [list]);
  return <span>bad</span>;
}
