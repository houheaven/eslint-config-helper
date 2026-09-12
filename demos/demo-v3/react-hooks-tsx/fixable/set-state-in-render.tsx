// ==========================================================
// react-hooks/set-state-in-render 示例
// ----------------------------------------------------------
// 规则含义：禁止在函数组件 render 阶段同步调用 setState（应移入事件回调或 useEffect）
// 官方推荐：recommended（默认 error）；本项目配置："warn"
// options：无
// 文档：https://react.dev/reference/eslint-plugin-react-hooks/lints/set-state-in-render
// ==========================================================

/* eslint react-hooks/set-state-in-render: ["warn"] */

/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/group-exports */
/* eslint-disable react/function-component-definition */

import React, { useCallback, useState } from "react";

// ---------------- ✅ 正确示例 ----------------
export function Ok() {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);
  return <div onClick={handleClick}>{count}</div>;
}

// ---------------- ❌ 错误示例 ----------------
export function Bad() {
  const [count, setCount] = useState(0);
  setCount(count + 1);
  return <div>{count}</div>;
}
