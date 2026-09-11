// ==========================================================
// react/jsx-indent 示例
// ----------------------------------------------------------
// 规则含义：控制 JSX 元素内部子节点的缩进宽度。
// 官方推荐：无（stylistic，v7.34+ 官方建议交给 Prettier）
//
// 推荐配置：["error", 2]
// options（第 2 参数）:
// - <number>            : 使用指定数量的空格（一般 2 或 4）
// - "tab"                : 使用 tab 缩进
// options（第 3 参数）: 可传对象 { checkAttributes, indentLogicalExpressions }
// ==========================================================

/* eslint-disable import/no-unresolved */

import React from "react";

// 正确示例：JSX 子节点使用 2 空格缩进
const Right = () => (
  <div>
    <span>hello</span>
    <div>
      <p>world</p>
    </div>
  </div>
);

// 错误示例：使用 4 空格缩进
const WrongFour = () => (
  <div>
      <span>hello</span>
      <p>world</p>
  </div>
);

// 错误示例：使用 1 空格缩进
const WrongOne = () => (
  <div>
   <span>hello</span>
   <p>world</p>
  </div>
);

export default Right;
export {
  WrongFour,
  WrongOne,
};
