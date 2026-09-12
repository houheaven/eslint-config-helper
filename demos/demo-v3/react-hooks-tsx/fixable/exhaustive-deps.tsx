
// ==========================================================
// react-hooks/exhaustive-deps 示例
// ----------------------------------------------------------
// 规则含义：校验 useEffect / useMemo / useCallback 依赖列表是否穷尽
// 官方推荐：recommended（warn）；本项目配置："warn"
// options：{ additionalHooks, requireExplicitEffectDeps, ... }
// 文档：https://github.com/facebook/react/issues/14920
// ==========================================================

/* eslint react-hooks/exhaustive-deps: ["warn"] */

/* eslint-disable @stylistic/member-delimiter-style */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/group-exports */
/* eslint-disable react/function-component-definition */

import React, { useEffect } from "react";

// ---------------- ✅ 正确示例 ----------------
export function Ok({ value }: { value: string }) {
  useEffect(() => {
    console.log(value);
  }, [value]);
  return null;
}

// ---------------- ❌ 错误示例 ----------------
export function Bad({ value }: { value: string }) {
  useEffect(() => {
    console.log(value);
  }, []);
  return null;
}
