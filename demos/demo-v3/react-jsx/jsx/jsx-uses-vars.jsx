
// ==========================================================
// react/jsx-uses-vars 示例
// ----------------------------------------------------------
// 规则含义：另一条“保护性规则”，同样不会产生独立报错。
// 作用是：JSX 里以标签形式引用的变量（如 <Foo />）也应视为
// “已使用”，避免 no-unused-vars 把它误判为未使用变量。
//
// 推荐配置：["error"] （无 options）
// - 官方 recommended（默认 error）
//
// 说明：本规则不会独立产生错误提示，本文件只演示“正确写法”
// 场景；没有可演示的错误 case。
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable react/function-component-definition */

import React from "react";

// mock 一个本地组件
function Foo() {
  return <span>foo</span>;
}

// ---------------- 正确示例 ----------------
// Foo 只在 JSX 中作为标签使用。
// 若关闭 react/jsx-uses-vars，no-unused-vars 就会把 Foo 报成未使用；
// 开启本规则后就不会误报。
const X = () => (
  <div>
    <Foo />
  </div>
);

export default X;
