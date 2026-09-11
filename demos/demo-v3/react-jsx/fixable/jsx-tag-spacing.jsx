
// ==========================================================
// react/jsx-tag-spacing 示例
// ----------------------------------------------------------
// 规则含义：控制 JSX 标签边缘的空格：
//   - 自闭合斜杠前是否加空格：<Foo /> vs <Foo/>
//   - 开始尖括号后是否可以有空格：< Foo> vs <Foo>
//   - 闭合尖括号前是否可以有空格：<Foo > vs <Foo>
//   - 闭合标签内的 / 前是否可以有空格：</Foo> vs < / Foo>
//
// 推荐配置：
//   ["error", {
//     closingSlash:      "never",  // </Foo> 中 / 前不允许空格
//     beforeSelfClosing: "always", // <Foo /> 自闭合斜杠前必须 1 空格
//     afterOpening:      "never",  // <Foo> 起始尖括号后不允许空格
//     beforeClosing:     "never",  // <Foo> 结束尖括号前不允许空格
//   }]
// 值域参考：
// - closingSlash / afterOpening / beforeClosing: "never" | "always" | "allow" | "proportional-always"
// - beforeSelfClosing: "never" | "always" | "proportional-always" | "allow"
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable react/self-closing-comp */

import React from "react";

const Foo = () => null;

const Demo = () => (
  <div>
    {/* 正确示例：自闭合前 1 空格 */}
    <Foo />

    {/* 正确示例：普通配对，无多余空格 */}
    <div>x</div>

    {/* 错误示例：beforeSelfClosing:"always" 但缺失空格 */}
    <Foo/>

    {/* 错误示例：afterOpening:"never" 起始尖括号后多了空格 */}
    < Foo />

    {/* 错误示例：beforeClosing:"never" 但开始标签结束尖括号前多空格 */}
    <Foo ></Foo>
  </div>
);

export default Demo;
