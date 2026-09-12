// ==========================================================
// react-hooks/exhaustive-effect-dependencies 示例
// ----------------------------------------------------------
// 规则含义：新一代 effect 依赖穷尽 / 无冗余校验（与 exhaustive-deps 二选一）
// 官方推荐：无（尚在实验期）；本项目配置："off"（demo 内 inline 打开为 "warn"）
// options：无
// 文档：https://react.dev/reference/eslint-plugin-react-hooks/lints/exhaustive-effect-dependencies
// ==========================================================

/* eslint react-hooks/exhaustive-effect-dependencies: ["warn"] */

/* eslint-disable @stylistic/member-delimiter-style */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/group-exports */
/* eslint-disable react/function-component-definition */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect } from "react";

// ---------------- ✅ 正确示例 ----------------
export function Ok({ value }: { value: string }) {
  useEffect(() => {
    console.log(value);
  }, [value]);
  return <div />;
}

// ---------------- ❌ 错误示例 ----------------
export function Bad({ value }: { value: string }) {
  useEffect(() => {
    console.log(value);
  }, []);
  return <div />;
}
