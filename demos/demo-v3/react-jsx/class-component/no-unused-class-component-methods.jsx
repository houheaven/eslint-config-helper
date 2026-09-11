
// ==========================================================
// react/no-unused-class-component-methods 示例
// ----------------------------------------------------------
// 规则含义：class 组件里不允许存在**未使用**的实例方法。
// 未使用的方法通常是重构遗留物，容易造成"死代码 + this 语义错误"。
//
// 推荐配置：["error"]
// - options: { ignore: ["someLifecycle"] } —— 允许忽略指定方法名
// - 生命周期方法（componentDidMount 等）不会被视为"未使用"
// - 用 this.xxx() 或 props.xxx 引用即视为已使用
// ==========================================================

/* eslint-disable import/no-unresolved */

import React from "react";

class Demo extends React.Component {
  // ---------------- ✅ 正确示例 ----------------
  // ✅ 生命周期不会被视为未使用
  componentDidMount() {
    return null;
  }

  // ✅ 被 render 内 this.xxx() 引用 → 已使用
  usedMethod() {
    return 1;
  }

  // ---------------- ❌ 错误示例 ----------------
  // ❌ 从未被引用的实例方法
  unusedMethod() {
    return 2;
  }

  // ❌ 另一个未使用的实例方法
  anotherUnused() {
    return 3;
  }

  render() {
    return <div>{this.usedMethod()}</div>;
  }
}

export default Demo;
