
// ==========================================================
// react/destructuring-assignment 示例
// ----------------------------------------------------------
// 规则含义：强制在组件内使用解构语法访问 props / state / context，
// 避免 `props.name` / `this.props.name` 这样的散点访问。
//
// 推荐配置：["error", "always"]
// options（第 2 参数）:
// - "always"（默认）：必须解构（函数组件签名解构 或 函数体/render 里解构均可）
// - "never"           ：禁止解构
// options（第 3 参数对象）:
// - ignoreClassFields:      false 是否忽略 class 字段
// - destructureInSignature: "ignore" | "always"（默认 ignore），是否要求签名处解构
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable max-classes-per-file */
/* eslint-disable arrow-parens */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/prefer-stateless-function */

import React from "react";

// ---------------- ✅ 正确示例：函数组件签名解构 ----------------
const OkFn = ({ name }) => <div>{name}</div>;

// ---------------- ✅ 正确示例：class 组件在 render 内解构 ----------------
class OkClass extends React.Component {
  render() {
    const { name } = this.props;
    return <div>{name}</div>;
  }
}

// ---------------- ❌ 错误示例：函数组件直接使用 props.xxx ----------------
const BadFn = (props) => <div>{props.name}</div>;

// ---------------- ❌ 错误示例：class 组件直接使用 this.props.xxx ----------------
class BadClass extends React.Component {
  render() {
    return <div>{this.props.name}</div>;
  }
}

export {
  OkFn,
  OkClass,
  BadFn,
  BadClass,
};
