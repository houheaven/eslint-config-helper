
// ==========================================================
// react/no-this-in-sfc 示例
// ----------------------------------------------------------
// 规则含义：函数组件（Stateless Functional Component, SFC）里
// 禁止使用 `this`。函数组件里 `this` 大多是 undefined 或全局对象，
// 使用者往往是把 class 组件误改成函数组件后没同步删掉的残留。
//
// 推荐配置：["error"]
// - 无 options
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-invalid-this */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-no-leaked-render */

import React from "react";

// ---------------- ✅ 正确示例：函数组件用 props 参数 ----------------
function OkComp(props) {
  return <div>{props.value}</div>;
}

// ---------------- ❌ 错误示例：函数组件里用 this.props ----------------
function BadComp() {
  // ❌ 函数组件里 this 是 undefined / 全局对象
  return <div>{this.props.value}</div>;
}

// ❌ 箭头函数组件同样禁止
const BadArrowComp = () => (
  <div>{this.state && this.state.foo}</div>
);

export default OkComp;
