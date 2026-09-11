
// ==========================================================
// react/state-in-constructor 示例
// ----------------------------------------------------------
// 规则含义：class 组件的 state 只能通过 class field
// 或者 constructor 里赋值来初始化，二选一。
//
// 推荐配置：["error", "never"]（本项目采用）
// - "never"   要求使用 class field（state = { ... }）
//             禁止在 constructor 里写 this.state = { ... }；
// - "always"（默认） 反过来，只允许 constructor 里赋值。
//
// 本项目沿用 Airbnb / React 官方文档倾向：class field。
// 官方文档：
//   https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-multi-comp */
/* eslint-disable max-classes-per-file */
/* eslint-disable react/destructuring-assignment */

import React from "react";

// ---------------- ✅ 正确示例：class field 初始化 state ----------------
class OkClassField extends React.Component {
  state = { count: 0 };

  render() {
    return <div>{this.state.count}</div>;
  }
}

// ---------------- ❌ 错误示例：在 constructor 中赋值 this.state ----------------
class BadInConstructor extends React.Component {
  constructor(props) {
    super(props);
    // 本项目配置为 "never"，禁止 constructor 里初始化 state
    this.state = { count: 0 };
  }

  render() {
    return <div>{this.state.count}</div>;
  }
}

export default OkClassField;
