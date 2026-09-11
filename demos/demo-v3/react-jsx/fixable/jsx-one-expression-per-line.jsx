
// ==========================================================
// react/jsx-one-expression-per-line 示例
// ----------------------------------------------------------
// 规则含义：JSX 每行最多只能放**一个**表达式或元素，避免同一行
// 混杂多段 JSX 造成 diff 噪声与阅读困难。
//
// 推荐配置：["error", { allow: "single-child" }]
// - allow 可选值：
//   - "none"          默认，任何多表达式共处一行都报错
//   - "literal"       允许行内文本字面量与元素同行
//   - "single-child"  当父元素只有一个子节点时允许同行（本项目采用）
//   - "single-line"   父元素及其子元素都在同一行时允许
//   - "non-jsx"       允许非 JSX 表达式与 JSX 同行
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-adjacent-inline-elements */

import React from "react";

const Demo = () => (
  <div>
    {/* 正确示例：single-child 允许父只有一个子节点时同行 */}
    <span>hello</span>

    {/* 正确示例：多元素时各自独占一行 */}
    <ul>
      <li>a</li>
      <li>b</li>
    </ul>

    {/* 错误示例：同一行出现两个兄弟 JSX 元素 */}
    <section>
      <span>a</span><span>b</span>
    </section>

    {/* 错误示例：JSX 与文本同行、且父有多个子节点 */}
    <p>
      hello <strong>world</strong>
      <em>!</em>
    </p>
  </div>
);

export default Demo;
