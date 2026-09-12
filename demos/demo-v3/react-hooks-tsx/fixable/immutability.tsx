
// ==========================================================
// react-hooks/immutability 示例
// ----------------------------------------------------------
// 规则含义：禁止修改 props / state 等不可变值（应按新引用返回）
// 官方推荐：recommended（默认 error）；本项目配置："warn"
// options：无
// 文档：https://react.dev/reference/eslint-plugin-react-hooks/lints/immutability
// ==========================================================

/* eslint react-hooks/immutability: ["warn"] */

/* eslint-disable @stylistic/member-delimiter-style */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/group-exports */
/* eslint-disable react/function-component-definition */

import React from "react";

// ---------------- ✅ 正确示例 ----------------
export function Ok({ user }: { user: { name: string } }) {
  const next = { ...user, name: user.name.toUpperCase() };
  return <span>{next.name}</span>;
}

// ---------------- ❌ 错误示例 ----------------
export function Bad({ user }: { user: { name: string } }) {
  // 直接 mutate props，破坏了 React 的不可变前提
  user.name = "mutated";
  return <span>{user.name}</span>;
}
