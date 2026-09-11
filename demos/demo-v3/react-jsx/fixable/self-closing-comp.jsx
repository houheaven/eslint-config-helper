
// ==========================================================
// react/self-closing-comp 示例
// ----------------------------------------------------------
// 规则含义：没有 children 的 JSX 元素应写作自闭合形式 <Foo />，
// 而不是 <Foo></Foo> 或 <img></img>，让代码风格与 React 官方
// / Airbnb 保持一致，并减少无意义的闭合标签噪声。
//
// 推荐配置：["error", { component: true, html: true }]
// options:
//   - component: boolean 是否检查用户自定义组件（默认 true）
//     true  → <Foo></Foo> 无 children 时会被要求写成 <Foo />
//   - html: boolean      是否检查原生 HTML 标签（默认 true）
//     true  → <img></img> 无 children 时会被要求写成 <img />
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-sort-props */

import React from "react";

const Foo = ({ children }) => <span>{children}</span>;

const Demo = () => (
  <div>
    {/* ---------------- 正确示例：无 children 时自闭合 ---------------- */}
    <Foo />
    <img src="a.png" alt="a" />
    <br />

    {/* 有 children 时保留开闭标签（不受本规则限制） */}
    <Foo>hello</Foo>

    {/* ---------------- 错误示例：无 children 却使用开闭标签 ---------------- */}
    {/* 错误：组件无 children，component:true 命中 */}
    <Foo></Foo>
    {/* 错误：img 无 children，html:true 命中 */}
    <img src="b.png" alt="b"></img>
  </div>
);

export default Demo;
