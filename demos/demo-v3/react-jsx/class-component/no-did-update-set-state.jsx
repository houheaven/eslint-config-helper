
// ==========================================================
// react/no-did-update-set-state 示例
// ----------------------------------------------------------
// 规则含义：禁止在 componentDidUpdate 中调用 setState。
// 无条件的 setState 会形成 render → didUpdate → setState → render
// 的无限循环。若确有必要，也应严格判断 prevProps / prevState
// 之后再更新，或改用 getDerivedStateFromProps。
//
// 推荐配置：["error"]
//   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable max-classes-per-file */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/destructuring-assignment */

import React from "react";

// ---------------- ✅ 正确示例 ----------------
// 在 componentDidUpdate 中只发副作用，不 setState
class GoodExample extends React.Component {
  state = { value: 0 };

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      // 允许触发副作用（如 fetch / 日志），只要不 setState 就行
      this.notify();
    }
  }

  notify() {
    return null;
  }

  render() {
    return <div>{this.state.value}</div>;
  }
}

// ---------------- ❌ 错误示例 ----------------
// 在 componentDidUpdate 里 setState —— 会造成再一次 update
class BadExample extends React.Component {
  state = { value: 0 };

  componentDidUpdate() {
    this.setState({ value: 1 });
  }

  render() {
    return <div>{this.state.value}</div>;
  }
}

export {
  GoodExample,
  BadExample,
};
