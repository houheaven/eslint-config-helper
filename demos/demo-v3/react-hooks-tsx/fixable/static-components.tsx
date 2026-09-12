
// ==========================================================
// react-hooks/static-components 示例
// ----------------------------------------------------------
// 规则含义：组件必须是静态定义，禁止在渲染过程中动态创建
// 官方推荐：recommended（默认 error）；本项目配置："warn"
// options：无
// 文档：https://react.dev/reference/eslint-plugin-react-hooks/lints/static-components
// ==========================================================

/* eslint react-hooks/static-components: ["warn"] */

/* eslint-disable @stylistic/member-delimiter-style */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/group-exports */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/no-unstable-nested-components */

import React from "react";

// ---------------- ✅ 正确示例 ----------------
function Inner({ text }: { text: string }) {
  return <span>{text}</span>;
}
export function Ok() {
  return <Inner text="hello" />;
}

// ---------------- ❌ 错误示例 ----------------
export function Bad() {
  function InnerDynamic({ text }: { text: string }) {
    return <span>{text}</span>;
  }
  return <InnerDynamic text="hello" />;
}
