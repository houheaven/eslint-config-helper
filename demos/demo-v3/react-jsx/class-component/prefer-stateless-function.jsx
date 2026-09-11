
// ==========================================================
// react/prefer-stateless-function 示例
// ----------------------------------------------------------
// 规则含义：如果 class 组件里没有用到 state / 生命周期 / refs，
// 就应该改写为函数组件（无 state 的 SFC）以简化实现。
//
// 推荐配置：["warn", { ignorePureComponents: true }]
// - ignorePureComponents: true  继承自 React.PureComponent 的类不算
//   —— 因为 PureComponent 自带 shallowCompare，无法用函数组件平替；
// - ignorePureComponents: false（默认） PureComponent 也会被检查。
// 本项目使用 warn 级别，避免存量 class 组件被迫全改。
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-multi-comp */
/* eslint-disable max-classes-per-file */
/* eslint-disable react/destructuring-assignment */

import React from "react";

// ---------------- ✅ 正确示例：确实需要 state ----------------
class OkWithState extends React.Component {
  state = { count: 0 };

  render() {
    return <div>{this.state.count}</div>;
  }
}

// ✅ 正确示例：PureComponent 被 ignorePureComponents:true 豁免
class OkPure extends React.PureComponent {
  render() {
    return <div>{this.props.label}</div>;
  }
}

// ---------------- ❌ 错误示例：无 state / 生命周期 / refs ----------------
// 只是渲染一个 props —— 完全可以写成函数组件，class 是多余的
class BadStateless extends React.Component {
  render() {
    return <div>{this.props.label}</div>;
  }
}

export default OkWithState;
