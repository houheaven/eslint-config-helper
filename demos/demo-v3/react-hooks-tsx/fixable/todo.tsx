// ==========================================================
// react-hooks/todo 示例
// ----------------------------------------------------------
// 规则含义：捕捉 React Compiler 尚未实现的功能占位（Todo 类别）
// 官方推荐：无；本项目配置："off"（demo 中 inline 打开为 "warn"）
// options：无
// 文档：https://react.dev/reference/eslint-plugin-react-hooks/lints/todo
// ==========================================================

/* eslint react-hooks/todo: ["warn"] */

/* eslint-disable @stylistic/member-delimiter-style */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/group-exports */
/* eslint-disable react/function-component-definition */

import React from "react";

// ---------------- ✅ 正确示例 ----------------
export function Ok({ value }: { value: string }) {
  return <span>{value}</span>;
}

// ---------------- ❌ 错误示例 ----------------
// React Compiler 目前不支持名为 `fbt` 的局部变量（与 fbt 插件冲突），
// 因此会被 todo 规则命中，提示 "Support local variables named `fbt`"
export function Bad() {
  const fbt = "trigger-todo";
  return <span>{fbt}</span>;
}
