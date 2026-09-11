
// ==========================================================
// react/no-find-dom-node 示例
// ----------------------------------------------------------
// 规则含义：禁止使用 ReactDOM.findDOMNode（React 18 已 deprecated、
// React 19 已移除）。它会破坏抽象，让父组件反向查询子组件的 DOM，
// 推荐改用 ref。
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

// ---------------- ✅ 正确示例：使用 ref ----------------
class OkComponent extends React.Component {
  constructor(props) {
    super(props);
    this.divRef = React.createRef();
  }
  componentDidMount() {
    // 直接用 ref 获取 DOM 节点
    console.log(this.divRef.current);
  }
  render() {
    return <div ref={this.divRef}>ok</div>;
  }
}

// ---------------- ❌ 错误示例：使用 findDOMNode ----------------
class BadComponent extends React.Component {
  componentDidMount() {
    const node = ReactDOM.findDOMNode(this);
    console.log(node);
  }
  render() {
    return <div>bad</div>;
  }
}

export { OkComponent, BadComponent };
