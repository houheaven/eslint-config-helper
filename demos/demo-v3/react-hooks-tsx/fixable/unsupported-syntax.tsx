// ==========================================================
// react-hooks/unsupported-syntax 示例
// ----------------------------------------------------------
// 规则含义：校验源码是否使用 React Compiler 明确不支持的语法（例如 eval、内联 class、with、pipe、throw expression 等）
// 官方推荐：recommended（warn）；本项目配置："warn"
// options：无
// 文档：https://react.dev/reference/eslint-plugin-react-hooks/lints/unsupported-syntax
// ==========================================================

/* eslint react-hooks/unsupported-syntax: ["warn"] */

/* eslint-disable @stylistic/member-delimiter-style */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/group-exports */
/* eslint-disable react/function-component-definition */
/* eslint-disable no-eval */

import React from "react";

// ---------------- ✅ 正确示例 ----------------
export function Ok({ value }: { value: string }) {
  return <span>{value}</span>;
}

// ---------------- ❌ 错误示例 ----------------
// React Compiler 明确不支持 `eval`（无法静态分析被执行的代码）
export function Bad() {
  const unused = "trigger-unused-vars";
  eval("1 + 1");
  return <span>bad</span>;
}
