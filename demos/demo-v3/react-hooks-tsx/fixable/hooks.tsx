
// ==========================================================
// react-hooks/hooks 示例
// ----------------------------------------------------------
// 规则含义：新版可自动修复的 Rules of Hooks 检查器，禁止条件调用 Hook
// 官方推荐：无；本项目配置："off"
// options：无
// 文档：https://react.dev/reference/eslint-plugin-react-hooks/lints/hooks
// ==========================================================

/* eslint react-hooks/hooks: ["warn"] */

/* eslint-disable @stylistic/member-delimiter-style */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/group-exports */
/* eslint-disable react/function-component-definition */
/* eslint-disable react-hooks/rules-of-hooks */

import React, { useState } from "react";

// ---------------- ✅ 正确示例 ----------------
export function Ok({ count }: { count: number }) {
  const [value, setValue] = useState(0);
  if (count > 0) {
    return <span>{value + count}</span>;
  }
  return <span>none</span>;
}

// ---------------- ❌ 错误示例 ----------------
export function Bad({ count }: { count: number }) {
  if (count > 0) {
    const [value, setValue] = useState(0);
    return <span>{value + count}</span>;
  }
  return <span>none</span>;
}
