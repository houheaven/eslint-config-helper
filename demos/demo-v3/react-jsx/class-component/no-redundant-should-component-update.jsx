
// ==========================================================
// react/no-redundant-should-component-update 示例
// ----------------------------------------------------------
// 规则含义：`React.PureComponent` 本身已经根据浅比较自动实现了
// shouldComponentUpdate；再手写 shouldComponentUpdate 属于冗余，
// 会让 PureComponent 的浅比较**完全失效**（因为你的返回值覆盖了它）。
//
// 推荐配置：["error"]
// - 无 options
// - 只对 `extends PureComponent` 的类组件生效；
//   普通 `extends Component` 允许自定义 shouldComponentUpdate。
//
// 备注：为了让报错只集中在本规则上，本文件只保留一个 class 组件
// （多类会引发 react/no-multi-comp 与 max-classes-per-file 的干扰）。
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import React from "react";

// ---------------- ❌ 错误示例 ----------------
// PureComponent 已内建浅比较，再写 shouldComponentUpdate 是冗余
class BadPure extends React.PureComponent {
  // ❌ 该方法会覆盖 PureComponent 的浅比较，属于冗余
  shouldComponentUpdate(nextProps) {
    return nextProps.value !== this.props.value;
  }

  render() {
    return <div>{this.props.value}</div>;
  }
}

// ---------------- ✅ 正确写法（作为文字对照，未在本文件启用） ----------------
// class OkPure extends React.PureComponent {   // ✅ 不写 shouldComponentUpdate
//   render() { return <div>{this.props.value}</div>; }
// }
// class OkComponent extends React.Component {  // ✅ 普通 Component 可以自定义
//   shouldComponentUpdate(next) { return next.value !== this.props.value; }
//   render() { return <div>{this.props.value}</div>; }
// }

export default BadPure;
