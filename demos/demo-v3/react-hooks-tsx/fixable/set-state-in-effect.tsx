// ==========================================================
// react-hooks/set-state-in-effect 示例
// ----------------------------------------------------------
// 规则含义：禁止在 useEffect 中同步调用 setState（应下沉到 render 或事件里）
// 官方推荐：recommended（默认 error）；本项目配置："warn"
// options：无
// 文档：https://react.dev/reference/eslint-plugin-react-hooks/lints/set-state-in-effect
// ==========================================================

/* eslint react-hooks/set-state-in-effect: ["warn"] */

/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/group-exports */
/* eslint-disable react/function-component-definition */

import React, { useEffect, useState } from "react";

// ---------------- ✅ 正确示例 ----------------
export function Ok() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const id = setTimeout(() => {
      setCount(c => c + 1);
    }, 1000);
    return () => {
      clearTimeout(id);
    };
  }, []);
  return <div>{count}</div>;
}

// ---------------- ❌ 错误示例 ----------------
export function Bad() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(1);
  }, []);
  return <div>{count}</div>;
}
