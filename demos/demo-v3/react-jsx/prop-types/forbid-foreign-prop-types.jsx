
// ==========================================================
// react/forbid-foreign-prop-types 示例
// ----------------------------------------------------------
// 规则含义：禁止在组件外部访问其他组件的 `.propTypes`。这样
// 会破坏组件封装，且生产环境 React 会移除 propTypes，导致运行
// 时 undefined。
//
// 推荐配置：["error", { allowInPropTypes: false }]
// - allowInPropTypes:false（默认）连在自身 propTypes 里引用也禁止
// - allowInPropTypes:true 允许 A.propTypes = { ...B.propTypes } 复用
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/destructuring-assignment */
// ★ 关于 react/prefer-exact-props：
//   eslint-plugin-react@7.37.5 中该规则在 MemberExpression 分支
//   (lib/rules/prefer-exact-props.js:150) 未做 `node.parent.right` 判空，
//   遇到"非赋值语境下访问 Foo.propTypes"时会 crash。
//   已在 demos/demo-v3/react-jsx/eslint.config.js 里为本文件单独关闭。

import React from "react";
import PropTypes from "prop-types";

function Base(props) {
  return <div>{props.title}</div>;
}
Base.propTypes = {
  title: PropTypes.string,
};
Base.defaultProps = {
  title: "",
};

// ---------------- ✅ 正确示例：不引用其他组件的 propTypes ----------------
function OkList(props) {
  return <ul>{props.items.map(t => <li key={t}>{t}</li>)}</ul>;
}
OkList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
};
OkList.defaultProps = {
  items: [],
};

// ---------------- ❌ 错误示例 1：把外部组件的 propTypes 复用给自己 ----------------
function BadList(props) {
  return <ul><li>{props.title}</li></ul>;
}
BadList.propTypes = Base.propTypes;   // ❌ 直接访问 Base.propTypes
BadList.defaultProps = {
  title: "",
};

// ---------------- ❌ 错误示例 2：把外部组件的 propTypes 中的一项复用为自己的一项 ----------------
// 说明：错误示例 1 演示的是把 Base.propTypes 整体赋值给别人；
// 这里演示"把 Base.propTypes 的某一项"当作自己 propTypes 的字段值使用，
// 只要出现 `Base.propTypes` 的成员表达式就会命中 forbid-foreign-prop-types。
// ⚠ 特别注意：不要在函数返回值 / 展开语法 / 解构中使用 Base.propTypes ——
// eslint-plugin-react@7.37.5 的 prefer-exact-props（lib/rules/prefer-exact-props.js:150）
// 会读 `node.parent.right`，非赋值语境下会 crash。
function BadList2(props) {
  return <ul><li>{props.title}</li></ul>;
}
BadList2.propTypes = {
  title: Base.propTypes.title,         // ❌ 复用 Base.propTypes.title
};
BadList2.defaultProps = {
  title: "",
};
