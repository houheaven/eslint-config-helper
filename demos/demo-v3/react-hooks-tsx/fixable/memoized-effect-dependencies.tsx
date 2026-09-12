// ==========================================================
// react-hooks/memoized-effect-dependencies 示例
// ----------------------------------------------------------
// 规则含义：useEffect 依赖必须是被 memoize 的稳定引用，不能是每次 render 都新建的对象 / 数组
// 官方推荐：无；本项目配置："off"（demo 内 inline 打开为 "warn"）
// options：无
// 文档：https://react.dev/reference/eslint-plugin-react-hooks/lints/memoized-effect-dependencies
// ==========================================================

/* eslint react-hooks/memoized-effect-dependencies: ["warn"] */

/* eslint-disable @stylistic/member-delimiter-style */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/group-exports */
/* eslint-disable react/function-component-definition */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useMemo } from "react";

// ---------------- ✅ 正确示例 ----------------
export function Ok({ id }: { id: number }) {
  const options = useMemo(() => ({ id }), [id]);
  useEffect(() => {
    console.log(options);
  }, [options]);
  return <div />;
}

// ---------------- ❌ 错误示例 ----------------
export function Bad({ id }: { id: number }) {
  const options = { id };
  useEffect(() => {
    console.log(options);
  }, [options]);
  return <div />;
}
