
// ==========================================================
// react/jsx-sort-default-props 示例（已废弃）
// ----------------------------------------------------------
// 规则含义：要求 defaultProps 对象字段按字母顺序排列。
// 已废弃（v7.33.0），替换为 react/sort-default-props。
//
// 演示用配置（临时启用）：
//   /* eslint react/jsx-sort-default-props: ["error", { ignoreCase: false }] */
//
// options:
//   - ignoreCase:  false(默认) | true    忽略大小写做排序
// ==========================================================

/* eslint react/jsx-sort-default-props: ["error", { ignoreCase: false }] */
/* eslint-disable react/sort-default-props */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
/* eslint-disable object-curly-newline */

import React from "react";

// ---------------- ✅ 正确示例：defaultProps 按字母升序 ----------------
function Ok(props) {
  return <div>{props.age}-{props.name}-{props.title}</div>;
}
Ok.defaultProps = {
  age: 0,
  name: "",
  title: "",
};

// ---------------- ❌ 错误示例：defaultProps 未按字母升序 ----------------
function Bad(props) {
  return <div>{props.age}-{props.name}-{props.title}</div>;
}
Bad.defaultProps = {
  title: "",
  age: 0,
  name: "",
};

export { Ok, Bad };
