
// ==========================================================
// react/no-arrow-function-lifecycle 示例
// ----------------------------------------------------------
// 规则含义：禁止把 React 类组件的生命周期方法/render 写成
// class field 箭头函数（例如 `componentDidMount = () => {}`）。
// 生命周期必须写成普通方法（`componentDidMount() {}`），否则：
//   1) 每个实例都会创建独立函数引用，浪费内存；
//   2) 子类无法 super.<lifecycle>() 复用父类逻辑；
//   3) shouldComponentUpdate/render 上尤为致命，直接破坏浅比较。
//
// 推荐配置：["error"]（无 options）
//   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-arrow-function-lifecycle.md
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */

import React from "react";

// ---------------- 正确示例：生命周期使用普通方法定义 ----------------
class GoodDemo extends React.Component {
  componentDidMount() {
    // 使用普通方法：this 绑定由方法调用者传入，可被子类 super 调用
    // 这里只做副作用（不 setState），避免与 react/no-did-mount-set-state 冲突
    Math.random();
  }

  shouldComponentUpdate() {
    return true;
  }

  render() {
    return <div>good</div>;
  }
}

// ---------------- 错误示例：生命周期用 class field 箭头函数 ----------------
class BadDemo extends React.Component {
  // 错误：componentDidMount 被写成箭头函数字段
  componentDidMount = () => {
    Math.random();
  };

  // 错误：shouldComponentUpdate 被写成箭头函数字段（性能陷阱）
  shouldComponentUpdate = () => true;

  // 错误：render 也被写成箭头函数字段
  render = () => <div>bad</div>;
}

export {
  GoodDemo,
  BadDemo,
};
