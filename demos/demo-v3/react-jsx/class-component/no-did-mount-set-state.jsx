
// ==========================================================
// react/no-did-mount-set-state 示例
// ----------------------------------------------------------
// 规则含义：禁止在 componentDidMount 中调用 setState。
// 该操作会在挂载后立即触发一次额外 render，
// 影响性能且往往意味着初始 state 计算方式不当。
// 应改为在 constructor / class field 中初始化 state。
//
// 推荐配置：["error"]
//   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable object-curly-newline */

import React from "react";

// ---------------- ✅ 正确示例 ----------------
// state 在 class field 里初始化；componentDidMount 里不再 setState
class GoodExample extends React.Component {
  state = { ready: true };

  componentDidMount() {
    // 只做副作用（订阅、日志），不触发再一次 render
    console.log("mounted");
  }

  render() {
    return <div>{this.state.ready ? "ready" : "loading"}</div>;
  }
}

// ---------------- ❌ 错误示例 ----------------
// 在 componentDidMount 里 setState —— 会额外触发一次 render
class BadExample extends React.Component {
  state = { ready: false };

  componentDidMount() {
    this.setState({ ready: true });
  }

  render() {
    return <div>{this.state.ready ? "ready" : "loading"}</div>;
  }
}

export { GoodExample, BadExample };
