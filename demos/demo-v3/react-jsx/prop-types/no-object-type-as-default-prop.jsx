// ==========================================================
// react/no-object-type-as-default-prop 示例
// ----------------------------------------------------------
// 规则含义：函数组件的解构默认参数 `function Foo({ a = ... })` 中，
// 默认值不能是**每次求值都会创建新引用**的字面量对象 / 数组 /
// 函数 / 正则 / Symbol / new Foo() 等。因为函数组件每次渲染都
// 会执行一次解构，父组件用 memo 浅比较时会误判为变更，可能
// 引发无限渲染。
//
// 推荐配置：["error"]  （无 options）
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/sort-prop-types */
/* eslint-disable react/prefer-exact-props */
/* eslint-disable object-curly-newline */

import React from "react";
import PropTypes from "prop-types";

const DEFAULT_TAGS = []; // 从模块顶层引用同一份，安全
const DEFAULT_META = { name: "" };
const DEFAULT_PATTERN = /x/u;
function noop() {
  return null;
}

// ---------------- ✅ 正确示例：使用原始值 / 模块级常量作为默认 ----------------
function OkCard({
  meta = DEFAULT_META, // ✅ 引用模块级常量
  onClick = noop, // ✅ 引用模块级函数
  pattern = DEFAULT_PATTERN,
  tags = DEFAULT_TAGS, // ✅
  title = "", // ✅ 原始值
}) {
  return (
    <div>
      {title}
      {tags.length}
      {meta.name}
      {typeof onClick}
      {String(pattern)}
    </div>
  );
}
OkCard.propTypes = {
  meta: PropTypes.shape({ name: PropTypes.string }).isRequired,
  onClick: PropTypes.func.isRequired,
  pattern: PropTypes.instanceOf(RegExp).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

// ---------------- ❌ 错误示例：默认值直接写字面量对象 / 数组 / 函数 ----------------
function BadCard({
  meta = { name: "" }, // ❌ 字面量对象
  onClick = () => null, // ❌ 箭头函数
  pattern = /x/u, // ❌ 正则字面量
  tags = [], // ❌ 字面量数组
  title = "",
}) {
  return (
    <div>
      {title}
      {String(tags)}
      {String(meta)}
      {typeof onClick}
      {String(pattern)}
    </div>
  );
}
BadCard.propTypes = {
  meta: PropTypes.shape({ name: PropTypes.string }).isRequired,
  onClick: PropTypes.func.isRequired,
  pattern: PropTypes.instanceOf(RegExp).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export { OkCard, BadCard };
