
// ==========================================================
// react/no-direct-mutation-state 示例
// ----------------------------------------------------------
// 规则含义：禁止直接对 this.state 或其属性赋值 —— 只能通过
// this.setState 更新状态。直接修改会绕过 React 的 batching /
// diff，导致 UI 与 state 不同步。
// 注意：constructor 内的初始化赋值 this.state = {...} 不会被此
// 规则拦截；但本项目开启了 react/state-in-constructor: never，
// 因此这里统一用 class field 初始化 state。
//
// 推荐配置：["error"]（recommended 内建启用）
//   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-parens */
/* eslint-disable react/destructuring-assignment */

import React from "react";

class Counter extends React.Component {
  // ✅ 用 class field 初始化 state（不算 mutation）
  state = { count: 0, list: [] };

  // ---------------- ✅ 正确示例：使用 setState ----------------
  handleGoodInc = () => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };

  // ---------------- ❌ 错误示例：直接改 this.state 上的字段 ----------------
  handleBadInc = () => {
    this.state.count = 999;
  };

  // ❌ 错误示例：赋值嵌套字段同样命中
  handleBadNested = () => {
    this.state.list = [1, 2, 3];
  };

  render() {
    return (
      <div>
        <span>{this.state.count}</span>
        <button type="button" onClick={this.handleGoodInc}>ok+</button>
        <button type="button" onClick={this.handleBadInc}>bad=</button>
        <button type="button" onClick={this.handleBadNested}>bad list</button>
      </div>
    );
  }
}

export default Counter;
