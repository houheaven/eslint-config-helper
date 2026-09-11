// ==========================================================
// react/jsx-indent-props 示例
// ----------------------------------------------------------
// 规则含义：控制 JSX 元素的 属性 的缩进宽度。
// 官方推荐：无（stylistic）
//
// 推荐配置：["error", 2]
// options（第 2 参数）:
// - <number>            : 使用指定数量的空格（一般 2 或 4）
// - "tab"                : 使用 tab 缩进
// - "first"              : 与首属性对齐
// ==========================================================

/* eslint-disable react/jsx-sort-props */
/* eslint-disable import/no-unresolved */

import React from "react";

// 正确示例：属性缩进 2 空格（相对父元素）
const Right = () => (
  <input
    type="text"
    name="foo"
    value="bar"
  />
);

// 错误示例：属性使用了 4 空格缩进
const WrongFour = () => (
  <input
      type="text"
      name="foo"
      value="bar"
  />
);

// 错误示例：属性无缩进
const WrongZero = () => (
  <input
  type="text"
  name="foo"
  value="bar"
  />
);

export default Right;
export {
  WrongFour,
  WrongZero,
};
