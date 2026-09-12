
// ==========================================================
// react-hooks/capitalized-calls 示例
// ----------------------------------------------------------
// 规则含义：禁止把首字母大写的函数当作普通函数调用，应写为 JSX
// 官方推荐：无；本项目配置："warn"
// options：无
// 文档：https://react.dev/reference/eslint-plugin-react-hooks/lints/capitalized-calls
// ==========================================================

/* eslint react-hooks/capitalized-calls: ["warn"] */

/* eslint-disable @stylistic/member-delimiter-style */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/group-exports */
/* eslint-disable react/function-component-definition */

import React from "react";

function MyComp({ title }: { title: string }) {
  return <span>{title}</span>;
}

// ---------------- ✅ 正确示例 ----------------
export function Ok() {
  return <MyComp title="hello" />;
}

// ---------------- ❌ 错误示例 ----------------
export function Bad() {
  return <div>{MyComp({ title: "hello" })}</div>;
}
