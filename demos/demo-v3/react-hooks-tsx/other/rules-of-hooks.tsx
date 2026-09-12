
// ==========================================================
// react-hooks/rules-of-hooks 示例
// ----------------------------------------------------------
// 规则含义：Hook 必须在函数组件 / 自定义 Hook 的顶层被调用，禁止在
//   条件、循环、嵌套函数或普通函数中调用；违反后 React 内部的
//   Hook 索引会错位，直接引发运行时 bug。
// 官方推荐：recommended（默认 error）；本项目配置："error"
// options：无
// 文档：https://react.dev/reference/rules/rules-of-hooks
// ==========================================================

/* eslint react-hooks/rules-of-hooks: ["error"] */

/* eslint-disable @stylistic/member-delimiter-style */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/group-exports */
/* eslint-disable react/boolean-prop-naming */
/* eslint-disable react/function-component-definition */

import React, { useEffect, useState } from "react";

// ---------------- ✅ 正确示例 ----------------
// Hook 在函数组件顶层调用
export function Ok({ value }: { value: string }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(value, count);
  }, [value, count]);
  return null;
}

// 自定义 Hook 内顶层调用 Hook 也是允许的
export function useOkCounter(initial: number) {
  const [count, setCount] = useState(initial);
  return count;
}

// ---------------- ❌ 错误示例 ----------------
// 在条件分支中调用 Hook：Hook 顺序会随渲染变化而改变
export function BadConditional({ enabled }: { enabled: boolean }) {
  if (enabled) {
    const [count, setCount] = useState(0);
  }
  return null;
}

// 在普通函数（非组件 / 非自定义 Hook）中调用 Hook
export function badPlainFunction() {
  const [count, setCount] = useState(0);
  return count;
}
