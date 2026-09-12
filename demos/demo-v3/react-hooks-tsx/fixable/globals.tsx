// ==========================================================
// react-hooks/globals 示例
// ----------------------------------------------------------
// 规则含义：禁止在 render 期间读写模块级 / 全局可变变量，render 必须无副作用
// 官方推荐：recommended（默认 error）；本项目配置："warn"
// options：无
// 文档：https://react.dev/reference/eslint-plugin-react-hooks/lints/globals
// ==========================================================

/* eslint react-hooks/globals: ["warn"] */

/* eslint-disable @stylistic/member-delimiter-style */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/group-exports */
/* eslint-disable react/function-component-definition */

import React, { useEffect } from "react";

let moduleCache = 0;

// ---------------- ✅ 正确示例 ----------------
export function Ok({ value }: { value: number }) {
  useEffect(() => {
    moduleCache = value;
  }, [value]);
  return <div>{moduleCache}</div>;
}

// ---------------- ❌ 错误示例 ----------------
export function Bad({ value }: { value: number }) {
  moduleCache = value;
  return <div>{moduleCache}</div>;
}
