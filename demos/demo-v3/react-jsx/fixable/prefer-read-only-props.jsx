
// ==========================================================
// react/prefer-read-only-props 示例
// ----------------------------------------------------------
// 规则含义：Flow 项目专用规则。要求函数组件的 props 类型标注为
// 只读（type Props = {| +x: string |} 或 $ReadOnly<...>），
// 防止组件内部误写 props 造成难以追踪的 bug。
//
// 推荐配置：本项目默认 off（"react/prefer-read-only-props": "off"），
// 该规则仅在 Flow 项目下才具备实际意义 —— 纯 JS/TS 项目里
// 没有 Flow 类型标注，规则永远无法触发。
//
// 说明：
// - 本项目使用 espree/ESLint 内置 JS 解析器（未接入 flow-parser 或
//   @babel/eslint-parser + @babel/preset-flow）。若直接在文件
//   里写 Flow 类型标注，会被 parser 直接抛 Parsing error。
// - 因此本文件仅作规则含义与推荐配置的说明档，不做实际报错演示。
//   Flow 项目内启用后，function C(props: Props) { ... } 中的
//   Props 若不是只读，会被报错。
//
// 本文件顶部使用 inline override 强制启用此规则，仅作参考：
/* eslint react/prefer-read-only-props: "error" */
// 由于文件不含 Flow 类型标注，实际不会有该规则的报错，
// 相当于"仅正确示例 + 说明"版本。
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-parens */

import React from "react";

// ---------------- 正确示例：普通函数组件（无 Flow 类型） ----------------
// 在纯 JS 场景下，规则不会检查任何 props 类型 —— 没有 Flow 类型可读取。
const OkFuncComponent = (props) => (
  <div>{props.name}</div>
);

// ---------------- 无法演示的错误示例 ----------------
// 下方伪代码只是示意 Flow 项目中会触发该规则的写法（本文件中被注释掉，
// 因为 parser 不支持 Flow 类型标注，未注释会导致 Parsing error）：
//
// type Props = { name: string };                    // 错误：非只读，会被 prefer-read-only-props 报错
// const BadFuncComponent = (props: Props) => (
//   <div>{props.name}</div>
// );
//
// 正确写法：
// type Props = $ReadOnly<{ name: string }>;         // 正确：只读
// 或使用精确对象只读语法：
// type Props = {| +name: string |};                 // 正确：只读
//
// 迁移到该规则前，先在 tooling 中启用 flow 解析（例如
// @babel/eslint-parser + @babel/preset-flow），否则本规则无法生效。

export {
  OkFuncComponent,
};
