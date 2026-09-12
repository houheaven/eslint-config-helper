
// ==========================================================
// react-hooks/incompatible-library 示例
// ----------------------------------------------------------
// 规则含义：阻止使用与 memoization 不兼容的第三方库 API（如 @tanstack/react-table、
//           @tanstack/react-virtual、react-hook-form 的 watch()）
// 官方推荐：recommended（默认 warn）；本项目配置："warn"
// options：无
// 文档：https://react.dev/reference/eslint-plugin-react-hooks/lints/incompatible-library
// ==========================================================

/* eslint react-hooks/incompatible-library: ["warn"] */

/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable import/group-exports */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/first */

// 局部声明未安装的 @tanstack/react-table，仅用于触发 react-hooks/incompatible-library
declare module "@tanstack/react-table" {
  export function useReactTable(options: Record<string, unknown>): unknown;
}

import React from "react";
import { useReactTable } from "@tanstack/react-table";

// ---------------- ✅ 正确示例 ----------------
export function Ok() {
  return <span>ok</span>;
}

// ---------------- ❌ 错误示例 ----------------
export function Bad() {
  // useReactTable 返回不可安全 memoize 的函数
  const table = useReactTable({});
  return <span>{String(table)}</span>;
}
