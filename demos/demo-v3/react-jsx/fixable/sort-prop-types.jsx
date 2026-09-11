
// ==========================================================
// react/sort-prop-types 示例
// ----------------------------------------------------------
// 规则含义：propTypes 的键必须按规则排序，便于阅读和 diff。
// 排序策略（自左至右优先级）：required-first → callbacks-last →
// 其余按字母序（忽略大小写）。
//
// 推荐配置：
//   ["error", {
//     callbacksLast: true,      // 以 on* 开头的 callback 类 prop 排在最后
//     ignoreCase: true,         // 排序时忽略大小写
//     requiredFirst: true,      // required 的 prop 排在最前
//     sortShapeProp: true,      // PropTypes.shape({...}) 内部字段也要排序
//     noSortAlphabetically: false,  // 是否放弃字母序（默认 false，即按字母序）
//   }]
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/prefer-exact-props */

import React from "react";
import PropTypes from "prop-types";

// ---------------- 正确示例：required 优先、callback 最后、shape 内部也按序 ----------------
const OkComponent = ({ id, name, age }) => (
  <div>
    <span>{id}</span>
    <span>{name}</span>
    <span>{age}</span>
  </div>
);
OkComponent.propTypes = {
  // required 排在最前，且内部按字母序
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  // 非 required、非 callback，按字母序（忽略大小写）
  age: PropTypes.number,
  meta: PropTypes.shape({
    // shape 内部同样：字母序（忽略大小写）
    key: PropTypes.string,
    value: PropTypes.string,
  }),
  title: PropTypes.string,
  // callbacks 最后
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

// ---------------- 错误示例：顺序完全错乱 ----------------
const BadComponent = ({ id, name, age }) => (
  <div>
    <span>{id}</span>
    <span>{name}</span>
    <span>{age}</span>
  </div>
);
BadComponent.propTypes = {
  // 错误：callback 出现在最前（callbacksLast 要求 onChange/onSubmit 在最后）
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  // 错误：非 required 排在 required 之前（requiredFirst 要求 required 在最前）
  age: PropTypes.number,
  // 错误：required 出现在非 required 之后
  id: PropTypes.string.isRequired,
  // 错误：shape 内部键未按字母序（sortShapeProp 触发）
  meta: PropTypes.shape({
    value: PropTypes.string,
    key: PropTypes.string,
  }),
  // 错误：name 应该跟 id 一起排在最前
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export {
  OkComponent,
  BadComponent,
};
