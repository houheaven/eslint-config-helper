// ==========================================================
// react-hooks/fbt 示例
// ----------------------------------------------------------
// 规则含义：校验 Facebook 内部国际化组件 `<fbt>` / `<fbs>` 的使用规范
// 官方推荐：无；本项目配置："off"（demo 中 inline 打开为 "warn"）
// options：无
// 文档：https://react.dev/reference/eslint-plugin-react-hooks/lints/fbt
// ----------------------------------------------------------
// 说明：该规则仅在使用 Facebook / Meta 内部的 fbt 国际化生态时命中，
// 需要引入 fbt 相关 JSX 元素并由 React Compiler 处理才会触发；
// 一般业务项目不使用 fbt，因此在纯 lint 上下文中无法触发。
// 此文件仅保留 ✅ 组件作为占位示例（占位型）。
// ==========================================================

/* eslint react-hooks/fbt: ["warn"] */

/* eslint-disable @stylistic/member-delimiter-style */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/prefer-default-export */

import React from "react";

// ---------------- ✅ 正确示例 ----------------
export function Ok({ value }: { value: string }) {
  return <span>{value}</span>;
}
