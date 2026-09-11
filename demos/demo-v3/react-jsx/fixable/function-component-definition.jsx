
// ==========================================================
// react/function-component-definition 示例
// ----------------------------------------------------------
// 规则含义：强制函数组件使用统一的定义方式（函数声明 / 箭头函数 / 命名表达式）。
//
// 推荐配置：["error", { namedComponents: "arrow-function", unnamedComponents: "arrow-function" }]
// options:
// - namedComponents:
//   - "function-declaration"   函数声明：function Foo() { ... }
//   - "function-expression"    函数表达式：const Foo = function () { ... }
//   - "arrow-function"（当前） 箭头函数：const Foo = () => (...)
//   - 也可传数组允许多种，如 ["arrow-function", "function-declaration"]
// - unnamedComponents:
//   - "function-expression"    默认导出中的匿名函数
//   - "arrow-function"（当前） 默认导出中的箭头函数
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable react/display-name */
/* eslint-disable space-before-function-paren */

import React from "react";

// ---------------- ✅ 正确示例：命名组件使用箭头函数 ----------------
const OkNamed = () => <div>ok</div>;

// ---------------- ❌ 错误示例：命名组件使用函数声明 ----------------
function BadNamed() {
  return <div>bad named</div>;
}

// ---------------- ❌ 错误示例：默认导出使用匿名函数表达式 ----------------
export default function () {
  return <div>bad unnamed</div>;
}

export {
  OkNamed,
  BadNamed,
};
