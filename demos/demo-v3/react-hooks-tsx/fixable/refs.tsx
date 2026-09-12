
// ==========================================================
// react-hooks/refs 示例
// ----------------------------------------------------------
// 规则含义：禁止在 render 期间读写 ref.current（useRef 返回值）
// 官方推荐：recommended（默认 error）；本项目配置："warn"
// options：无
// 文档：https://react.dev/reference/eslint-plugin-react-hooks/lints/refs
// ==========================================================

/* eslint react-hooks/refs: ["warn"] */

/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/group-exports */
/* eslint-disable react/function-component-definition */

import React, { useEffect, useRef } from "react";

// ---------------- ✅ 正确示例 ----------------
export function Ok() {
  const ref = useRef(0);
  useEffect(() => {
    ref.current = 1;
  }, []);
  return <div />;
}

// ---------------- ❌ 错误示例 ----------------
export function Bad() {
  const ref = useRef(0);
  ref.current = 1;
  return <div>{ref.current}</div>;
}
