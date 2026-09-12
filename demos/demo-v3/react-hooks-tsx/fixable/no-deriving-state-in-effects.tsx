// ==========================================================
// react-hooks/no-deriving-state-in-effects 示例
// ----------------------------------------------------------
// 规则含义：禁止在 useEffect 中依据 props / state 派生新的 state（应改为 useMemo 或 render 内派生）
// 官方推荐：无；本项目配置："off"（demo 内 inline 打开为 "warn"）
// options：无
// 文档：https://react.dev/reference/eslint-plugin-react-hooks/lints/no-deriving-state-in-effects
// ==========================================================

/* eslint react-hooks/no-deriving-state-in-effects: ["warn"] */

/* eslint-disable @stylistic/member-delimiter-style */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/group-exports */
/* eslint-disable react/function-component-definition */
/* eslint-disable react-hooks/set-state-in-effect */

import React, { useEffect, useMemo, useState } from "react";

// ---------------- ✅ 正确示例 ----------------
export function Ok({ first, last }: { first: string; last: string }) {
  const full = useMemo(() => `${first} ${last}`, [first, last]);
  return <div>{full}</div>;
}

// ---------------- ❌ 错误示例 ----------------
export function Bad({ first, last }: { first: string; last: string }) {
  const [full, setFull] = useState("");
  useEffect(() => {
    setFull(`${first} ${last}`);
  }, [first, last]);
  return <div>{full}</div>;
}
