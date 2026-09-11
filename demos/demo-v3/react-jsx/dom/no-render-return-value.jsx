// ==========================================================
// react/no-render-return-value 示例
// ----------------------------------------------------------
// 规则含义：React 16 起，ReactDOM.render 的返回值已被声明为
// 不再稳定；React 18 直接返回 undefined。禁止把返回值赋给变量
// 当作组件实例使用。
//
// 推荐配置：["error"]
// - 官方 recommended，无 options
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-deprecated */
/* eslint-disable react/function-component-definition */
/* eslint-disable object-curly-newline */

import React from "react";
import ReactDOM from "react-dom";

function App() {
  return <div>hi</div>;
}

// ---------------- ✅ 正确示例：不接收 render 的返回值 ----------------
function initOk() {
  ReactDOM.render(<App />, document.getElementById("root"));
}

// ---------------- ❌ 错误示例：将返回值赋给变量当组件实例使用 ----------------
function initBad1() {
  const inst = ReactDOM.render(<App />, document.getElementById("root"));
  console.log(inst);
}

// ❌ 错误示例：直接 return
function initBad2() {
  return ReactDOM.render(<App />, document.getElementById("root"));
}

export { initOk, initBad1, initBad2 };
