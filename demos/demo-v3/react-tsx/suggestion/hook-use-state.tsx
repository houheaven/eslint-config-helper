
// ==========================================================
// react/hook-use-state 示例
// ----------------------------------------------------------
// 规则含义：useState 返回的 `[value, setValue]` 命名必须成对：
// setter 需为 `set + 首字母大写(value)`。
//
// 推荐配置：["error", { allowDestructuredState: false }]
// - allowDestructuredState:false（默认）
//   禁止把 useState 的返回值先解构到别的变量（会绕开命名检查）
// - allowDestructuredState:true
//   允许 const state = useState(0); const [v, s] = state; 这种写法
// ==========================================================

/* eslint react/hook-use-state: ["error", { "allowDestructuredState": false }] */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState } from "react";

function Demo() {
  // ---------------- ✅ 正确示例：命名成对 ----------------
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // ---------------- ❌ 错误示例：setter 命名与 value 不匹配 ----------------
  const [foo, updateFoo] = useState<number>(0);           // setter 应为 setFoo
  const [bar, setBaz] = useState<number>(0);              // setter 首字母应对应 Bar
  const [size, changeSize] = useState<string>("md");      // setter 应为 setSize

  // ❌ 错误示例：只解构了 value，没解构 setter
  const [visible] = useState<boolean>(false);

  return <div>{count}{name}{String(isOpen)}{foo}{bar}{size}{String(visible)}</div>;
}

export default Demo;
