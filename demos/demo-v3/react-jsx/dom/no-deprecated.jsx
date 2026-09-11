
// ==========================================================
// react/no-deprecated 示例
// ----------------------------------------------------------
// 规则含义：禁止使用当前 React 版本已废弃的 API。规则根据
// eslint-plugin-react 的 settings.react.version 判断哪些 API 已弃用。
//
// 常见 deprecated 列表（截至 React 18/19）：
// - React.render / React.unmountComponentAtNode（React 18 移到 react-dom/client）
// - React.findDOMNode
// - componentWillMount / componentWillReceiveProps / componentWillUpdate
// - React.createFactory
// - defaultProps（函数组件，React 18.3+）
//
// 推荐配置：["error"]
// - 官方 recommended，无 options
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-multi-comp */
/* eslint-disable max-classes-per-file */
/* eslint-disable object-curly-newline */

import React from "react";
import ReactDOM from "react-dom";

// ---------------- ✅ 正确示例：使用当前 API ----------------
class OkComponent extends React.Component {
  componentDidMount() { /* 现代生命周期 */ }
  render() { return <div>ok</div>; }
}

// ---------------- ❌ 错误示例：使用已废弃的生命周期 ----------------
class BadComponent extends React.Component {
  componentWillMount() { /* 已废弃 */ }
  componentWillReceiveProps() { /* 已废弃 */ }
  componentWillUpdate() { /* 已废弃 */ }
  render() { return <div>bad</div>; }
}

// ❌ 错误示例：React 18 已移除的 ReactDOM.render / unmountComponentAtNode
function initApp() {
  ReactDOM.render(<OkComponent />, document.body);
  ReactDOM.unmountComponentAtNode(document.body);
}

export { OkComponent, BadComponent, initApp };
