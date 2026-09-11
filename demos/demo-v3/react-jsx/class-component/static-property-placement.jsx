
// ==========================================================
// react/static-property-placement 示例
// ----------------------------------------------------------
// 规则含义：defaultProps / propTypes / contextType 这类静态
// 属性的书写位置必须统一。
//
// 推荐配置：["error", "static public field"]（本项目采用）
// - "static public field"（默认，推荐）
//     写在 class 内部：`static defaultProps = { ... };`
// - "property assignment"
//     写在 class 外部：`Foo.defaultProps = { ... };`
// - "static getter"
//     以 static getter 形式：`static get defaultProps() { ... }`
//
// 官方文档：
//   https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-multi-comp */
/* eslint-disable max-classes-per-file */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */

import React from "react";

// ---------------- ✅ 正确示例：static public field ----------------
class OkPlacement extends React.Component {
  static defaultProps = { label: "ok" };

  render() {
    return <div>{this.props.label}</div>;
  }
}

// ---------------- ❌ 错误示例：写在 class 外部 ----------------
class BadPlacement extends React.Component {
  render() {
    return <div>{this.props.label}</div>;
  }
}

// 本项目要求写在 class 内部；这里以外部赋值形式定义 —— 会被规则拦截
BadPlacement.defaultProps = { label: "bad" };

export default OkPlacement;
