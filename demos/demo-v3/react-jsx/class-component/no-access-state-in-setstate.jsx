
// ==========================================================
// react/no-access-state-in-setstate 示例
// ----------------------------------------------------------
// 规则含义：禁止在 setState 的参数里直接引用 this.state。
// 因为 setState 是异步/合并的，直接读 this.state 可能拿到旧值，
// 应改用函数式 setState(prev => ({ ... })) 以基于上一份 state 计算。
//
// 推荐配置：["error"]
//   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-parens */
/* eslint-disable react/destructuring-assignment */

import React from "react";

class Counter extends React.Component {
  state = { count: 0 };

  // ---------------- ✅ 正确示例：使用函数式 setState ----------------
  handleGoodIncrement = () => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };

  // ✅ 正确示例：不依赖旧值的直接赋值
  handleGoodReset = () => {
    this.setState({ count: 0 });
  };

  // ---------------- ❌ 错误示例：在 setState 里读 this.state ----------------
  handleBadIncrement = () => {
    // 直接引用 this.state.count 计算下一个值 —— 可能拿到过期数据
    this.setState({ count: this.state.count + 1 });
  };

  // ❌ 错误示例：即使包一层解构，只要在 setState 对象里引用 this.state 就算命中
  handleBadMerge = () => {
    this.setState({ ...this.state, count: 999 });
  };

  render() {
    return (
      <div>
        <span>{this.state.count}</span>
        <button type="button" onClick={this.handleGoodIncrement}>ok+</button>
        <button type="button" onClick={this.handleGoodReset}>reset</button>
        <button type="button" onClick={this.handleBadIncrement}>bad+</button>
        <button type="button" onClick={this.handleBadMerge}>badMerge</button>
      </div>
    );
  }
}

export default Counter;
