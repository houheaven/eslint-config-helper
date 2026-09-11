
// ==========================================================
// react/no-adjacent-inline-elements 示例
// ----------------------------------------------------------
// 规则含义：JSX 里两个相邻的行内元素（<a>、<span>、<em>、<strong>、
// <b> 等）若之间没有空白字符，浏览器/屏幕阅读器可能把它们视为一个
// 单词，影响可访问性。规则要求相邻内联元素之间必须有空白节点。
//
// 推荐配置：["warn"]
// - 判定"相邻内联元素"较激进，Airbnb 用 warn 而非 error
// - 该规则无 options
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-one-expression-per-line */

import React from "react";

function Demo() {
  return (
    <div>
      {/* ---------------- ✅ 正确示例：两个内联元素之间有空白 ---------------- */}
      <div>
        <a href="/a">A</a>
        <a href="/b">B</a>
      </div>

      {/* ✅ 正确示例：块级元素（div）不受此规则约束 */}
      <div>
        <div>A</div>
        <div>B</div>
      </div>

      {/* ---------------- ❌ 错误示例：相邻内联元素之间没有空白 ---------------- */}
      <div><a href="/a">A</a><a href="/b">B</a></div>

      {/* ❌ 错误示例：<span> 相邻 */}
      <div><span>Foo</span><span>Bar</span></div>
    </div>
  );
}

export default Demo;
