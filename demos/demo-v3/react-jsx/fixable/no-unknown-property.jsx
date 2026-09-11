
// ==========================================================
// react/no-unknown-property 示例
// ----------------------------------------------------------
// 规则含义：禁止在 JSX 中使用未知或写错大小写的 DOM 属性，
// 例如把 HTML 的 `class` / `for` 直接写到 JSX（应写作 `className` / `htmlFor`），
// 或将 `data-*` 自定义属性名混用大小写导致运行时报错。
//
// 推荐配置：["error", { requireDataLowercase: true }]
// options:
//   - ignore: string[]          白名单，指定的属性不检查
//   - requireDataLowercase: boolean
//     true  → 强制所有 data-* 属性都用小写字母（含连字符里的字母）
//     false → 允许大写 data-Foo（默认）
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable react/forbid-dom-props */
/* eslint-disable react/jsx-sort-props */

import React from "react";

const Demo = () => (
  <div>
    {/* ---------------- 正确示例：使用 React 的属性名 & 全小写 data-* ---------------- */}
    <label htmlFor="input1">Hello</label>
    <input className="x" id="input1" data-foo="1" data-bar-baz="2" />

    {/* ---------------- 错误示例：使用 HTML 原生属性名 / 大写 data-* ---------------- */}
    {/* 错误：DOM 上没有 class，应为 className */}
    <span class="x">bad-class</span>
    {/* 错误：DOM 上没有 for，应为 htmlFor */}
    <label for="y">bad-for</label>
    {/* 错误：requireDataLowercase 要求 data-* 全小写 */}
    <span data-Foo="1">bad-data</span>
  </div>
);

export default Demo;
