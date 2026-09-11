// ==========================================================
// react/jsx-max-props-per-line 示例
// ----------------------------------------------------------
// 规则含义：控制 JSX 每行最多允许的属性数量。
// 官方推荐：无
//
// 推荐配置：["error", { maximum: 1, when: "multiline" }]
// options（第 2 参数）:
// - maximum : 每行最多允许的属性数（默认 1）
// - when    : 何时应用（"always" 无条件；"multiline" 仅在 JSX 跨多行时应用）
// ==========================================================

/* eslint-disable react/jsx-sort-props */
/* eslint-disable import/no-unresolved */

import React from "react";

// 正确示例：单行 JSX 上多个属性不受该规则限制（when: "multiline"）
const RightSingle = () => (
  <input type="text" name="foo" value="bar" />
);

// 正确示例：多行 JSX 时，每行只有一个属性
const RightMulti = () => (
  <input
    type="text"
    name="foo"
    value="bar"
  />
);

// 错误示例：多行 JSX 时，某行放了两个属性
const Wrong = () => (
  <input
    type="text" name="foo"
    value="bar"
  />
);

export default RightSingle;
export {
  RightMulti,
  Wrong,
};
