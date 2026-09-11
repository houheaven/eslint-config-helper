
// ==========================================================
// react/require-optimization 示例
// ----------------------------------------------------------
// 规则含义：要求类组件必须继承 PureComponent 或函数组件必须
// 用 React.memo/shouldComponentUpdate 包装。
//
// 推荐配置："off"
// - 强制所有组件优化反而增加复杂度和内存开销
// - 官方文档不推荐使用
//
// 本示例用文件级注释临时把规则打开，展示报错点。
// 实际项目**不建议**启用。
// ==========================================================

/* eslint react/require-optimization: "error" */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/function-component-definition */
/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable object-curly-newline */

import React, { memo, PureComponent } from "react";

// ---------------- ✅ 正确示例：使用 PureComponent ----------------
class OkClass extends PureComponent {
  render() { return <div>ok</div>; }
}

// ✅ 正确示例：函数组件用 memo 包裹
const OkFunction = memo(function OkFunction() {
  return <div>ok</div>;
});

// ---------------- ❌ 错误示例：普通 Component 未做优化 ----------------
class BadClass extends React.Component {
  render() { return <div>bad</div>; }
}

// ❌ 错误示例：函数组件未用 memo
function BadFunction() {
  return <div>bad</div>;
}

export { OkClass, OkFunction, BadClass, BadFunction };
