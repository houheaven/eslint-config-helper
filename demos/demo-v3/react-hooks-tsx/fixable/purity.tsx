
// ==========================================================
// react-hooks/purity 示例
// ----------------------------------------------------------
// 规则含义：组件 / Hook 必须是纯函数，禁止调用已知有副作用的 API（如 Math.random、Date.now）
// 官方推荐：recommended（默认 error）；本项目配置："warn"
// options：无
// 文档：https://react.dev/reference/eslint-plugin-react-hooks/lints/purity
// ==========================================================

/* eslint react-hooks/purity: ["warn"] */

/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/group-exports */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/hook-use-state */

import React, { useState } from "react";

// ---------------- ✅ 正确示例 ----------------
export function Ok() {
  const [seed] = useState(() => Math.random());
  return <div>{seed}</div>;
}

// ---------------- ❌ 错误示例 ----------------
export function Bad() {
  const seed = Math.random();
  return <div>{seed}</div>;
}
