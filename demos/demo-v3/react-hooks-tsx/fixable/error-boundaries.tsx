// ==========================================================
// react-hooks/error-boundaries 示例
// ----------------------------------------------------------
// 规则含义：禁止用 try/catch 捕获子组件渲染或 hook 调用的错误，应改用 Error Boundary
// 官方推荐：recommended（默认 error）；本项目配置："warn"
// options：无
// 文档：https://react.dev/reference/eslint-plugin-react-hooks/lints/error-boundaries
// ==========================================================

/* eslint react-hooks/error-boundaries: ["warn"] */

/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/group-exports */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/hook-use-state */
/* eslint-disable brace-style */
/* eslint-disable keyword-spacing */

import React, { useState } from "react";

function Child() {
  return <span>child</span>;
}

// ---------------- ✅ 正确示例 ----------------
export function Ok() {
  return <Child />;
}

// ---------------- ❌ 错误示例 ----------------
export function Bad() {
  try {
    const value = useState(0);
    return <div>{value[0]}</div>;
  } catch (e) {
    return <div>fallback</div>;
  }
}
