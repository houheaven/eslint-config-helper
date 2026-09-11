
// ==========================================================
// react/jsx-props-no-multi-spaces 示例
// ----------------------------------------------------------
// 规则含义：禁止 JSX 属性之间出现**多余空格**（多个连续空格）。
// 属性之间应当只有 1 个空格，或者换行；避免手动对齐带来的
// 无谓 diff。
//
// 推荐配置："error"（无 options）
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable react/forbid-dom-props */
/* eslint-disable no-multi-spaces */

import React from "react";

const Demo = () => (
  <div>
    {/* 正确示例：属性之间只有 1 个空格 */}
    <input type="text" name="username" id="username" />

    {/* 正确示例：多属性换行分开写 */}
    <input
      type="text"
      name="password"
      id="password"
    />

    {/* 错误示例：属性之间多了额外空格 */}
    <input type="text"    name="a" />

    {/* 错误示例：多个位置都有多余空格 */}
    <input  type="text"   name="b"   id="b" />
  </div>
);

export default Demo;
