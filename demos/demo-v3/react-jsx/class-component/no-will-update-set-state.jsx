
// ==========================================================
// react/no-will-update-set-state 示例
// ----------------------------------------------------------
// 规则含义：禁止在 componentWillUpdate（或其 UNSAFE_ 别名）中
// 调用 setState。该生命周期已被 React 官方标为 UNSAFE_，
// 且在其中 setState 会立即触发再一次 update，造成循环。
//
// 推荐配置：["error"]
//   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
//
// 注意：本项目同时开启了 react/no-unsafe，UNSAFE_componentWillUpdate
// 会额外触发 no-unsafe 报错，因此我们在这里 disable no-unsafe，
// 让示例只保留 no-will-update-set-state 的报错。
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-unsafe */
/* eslint-disable camelcase */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/destructuring-assignment */

import React from "react";

// ---------------- ✅ 正确示例 ----------------
// 不实现 componentWillUpdate，也不在其中 setState
class GoodExample extends React.Component {
  state = { value: 0 };

  render() {
    return <div>{this.state.value}</div>;
  }
}

// ---------------- ❌ 错误示例 ----------------
// UNSAFE_componentWillUpdate 里 setState —— 会形成循环 update
class BadExample extends React.Component {
  state = { value: 0 };

  UNSAFE_componentWillUpdate() {
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
