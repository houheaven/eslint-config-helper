// ==========================================================
// react-hooks/config 示例
// ----------------------------------------------------------
// 规则含义：校验 React Compiler 的配置项是否合法（`sources`、`target`、`gating` 等）
// 官方推荐：recommended（默认 error）；本项目配置："warn"（默认场景不触发）
// options：无
// 文档：https://react.dev/reference/eslint-plugin-react-hooks/lints/config
// ----------------------------------------------------------
// 说明：该规则仅在 React Compiler 配置解析阶段发现异常时命中
// （例如 `sources` 存在但 filename 缺失），需要显式启用 Compiler
// 编译路径才能触发；在纯 lint + 默认配置下无法通过业务代码触发。
// 此文件仅保留 ✅ 组件作为占位示例（占位型）。
// ==========================================================

/* eslint react-hooks/config: ["warn"] */

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
