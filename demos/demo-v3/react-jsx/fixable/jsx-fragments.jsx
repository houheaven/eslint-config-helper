// ==========================================================
// react/jsx-fragments 示例
// ----------------------------------------------------------
// 规则含义：统一 Fragment 的书写方式。
// 官方推荐：无
//
// 推荐配置：["error", "syntax"]
// options（第 2 参数）:
// - "syntax"（默认）：强制使用 <>...</> 语法糖
// - "element"        ：强制使用 <React.Fragment>...</React.Fragment>
//   （无法使用 key 时才允许使用 <>...</>）
// ==========================================================

/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */

import React, { Fragment } from "react";

// 正确示例：使用 <>...</> 语法糖
const Right = () => (
  <>
    <span>a</span>
    <span>b</span>
  </>
);

// 错误示例：使用具名 Fragment 组件
const WrongNamed = () => (
  <Fragment>
    <span>a</span>
    <span>b</span>
  </Fragment>
);

// 错误示例：使用 React.Fragment
const WrongNamespaced = () => (
  <React.Fragment>
    <span>a</span>
    <span>b</span>
  </React.Fragment>
);

export default Right;
