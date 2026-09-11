
// ==========================================================
// react/no-unsafe 示例
// ----------------------------------------------------------
// 规则含义：禁止使用 React 已标记为 UNSAFE_ 的生命周期方法：
//   - UNSAFE_componentWillMount
//   - UNSAFE_componentWillReceiveProps
//   - UNSAFE_componentWillUpdate
// 这些方法在并发模式下会被调用多次或时机异常，官方建议改用
// componentDidMount / getDerivedStateFromProps / getSnapshotBeforeUpdate。
//
// 推荐配置：["error"]
// - options: { checkAliases: true } —— 是否检查 UNSAFE_ 前缀的别名
//   （默认 false，仅在 React 16.3+ 会把 UNSAFE_ 生命周期视作不安全）
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable camelcase */
/* eslint-disable react/sort-comp */

import React from "react";

class Demo extends React.Component {
  // ---------------- ❌ 错误示例 ----------------
  // ❌ UNSAFE_componentWillMount 已被 React 官方标记为不安全
  UNSAFE_componentWillMount() {
    return null;
  }

  // ❌ UNSAFE_componentWillReceiveProps 已被弃用
  UNSAFE_componentWillReceiveProps(nextProps) {
    return nextProps;
  }

  // ❌ UNSAFE_componentWillUpdate 已被弃用
  UNSAFE_componentWillUpdate(nextProps) {
    return nextProps;
  }

  // ---------------- ✅ 正确示例 ----------------
  // ✅ 用 componentDidMount 替代 UNSAFE_componentWillMount
  componentDidMount() {
    return null;
  }

  // ✅ 用 static getDerivedStateFromProps 替代 UNSAFE_componentWillReceiveProps
  static getDerivedStateFromProps(props) {
    return props;
  }

  // ✅ 用 getSnapshotBeforeUpdate 替代 UNSAFE_componentWillUpdate
  getSnapshotBeforeUpdate() {
    return null;
  }

  render() {
    // 消费所有方法，规避 react/no-unused-class-component-methods
    this.UNSAFE_componentWillMount();
    this.UNSAFE_componentWillReceiveProps({});
    this.UNSAFE_componentWillUpdate({});
    this.componentDidMount();
    this.getSnapshotBeforeUpdate();
    return <div />;
  }
}

export default Demo;
