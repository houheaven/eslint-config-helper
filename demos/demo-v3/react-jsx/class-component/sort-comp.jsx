
// ==========================================================
// react/sort-comp 示例
// ----------------------------------------------------------
// 规则含义：class 组件里静态方法、生命周期、handler、render
// 的书写顺序应遵循一致约定。
//
// 推荐配置（默认 order）：
//   ["static-methods", "lifecycle", "everything-else", "render"]
// - static-methods    静态方法（getDerivedStateFromProps 等）
// - lifecycle         constructor / componentDidMount / componentWillUnmount ...
// - everything-else   业务方法（handleXxx / renderXxx 等）
// - render            render() 必须放在最后
//
// 本项目使用 warn 级别，减少存量文件的重排压力。
// 官方文档：
//   https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-multi-comp */
/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-unused-class-component-methods */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import React from "react";

// ---------------- ✅ 正确示例：static -> lifecycle -> handlers -> render ----------------
class OkOrder extends React.Component {
  static defaultProps = { label: "ok" };

  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    // ok
  }

  handleClick = () => {
    // ok
  };

  render() {
    return <div>{this.props.label}</div>;
  }
}

// ---------------- ❌ 错误示例：render 出现在生命周期之前 ----------------
class BadOrder extends React.Component {
  // render 应该放最后 —— 这里被塞到了 constructor 之前
  render() {
    return <div>{this.props.label}</div>;
  }

  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    // bad
  }
}

export default OkOrder;
