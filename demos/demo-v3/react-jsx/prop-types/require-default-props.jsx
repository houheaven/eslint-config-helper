
// ==========================================================
// react/require-default-props 示例
// ----------------------------------------------------------
// 规则含义：非 required 的 prop 都必须提供 defaultProps
// （或函数组件的解构默认值），避免调用方省略后出现 undefined
// 行为不一致。
//
// 推荐配置：["error", { forbidDefaultForRequired: false }]
// （注：本项目将 forbidDefaultForRequired 关闭，用来和
//   react/default-props-match-prop-types 演示解耦）
// options:
//   - forbidDefaultForRequired: boolean 是否禁止给 required prop 加 default
//   - ignoreFunctionalComponents: boolean 是否忽略函数组件
//   - classes / functions: "defaultProps" | "defaultArguments" | "ignore"
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prefer-exact-props */

import React from "react";
import PropTypes from "prop-types";

// ---------------- ✅ 正确示例：非 required 的都给 defaultProps ----------------
function OkGreeting(props) {
  return <div>{props.name} - {props.age}</div>;
}
OkGreeting.propTypes = {
  age: PropTypes.number,
  name: PropTypes.string,
};
OkGreeting.defaultProps = {
  age: 0,
  name: "",
};

// ✅ 正确示例：required prop 不需要 defaultProps
function OkRequired(props) {
  return <div>{props.name}</div>;
}
OkRequired.propTypes = {
  name: PropTypes.string.isRequired,
};

// ---------------- ❌ 错误示例：非 required prop 缺失 defaultProps ----------------
function BadGreeting(props) {
  return <div>{props.name} - {props.age}</div>;
}
BadGreeting.propTypes = {
  age: PropTypes.number,          // ❌ 没有 defaultProps
  name: PropTypes.string,         // ❌ 没有 defaultProps
};

export {
  OkGreeting,
  OkRequired,
  BadGreeting,
};
