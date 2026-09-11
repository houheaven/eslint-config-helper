
// ==========================================================
// react/display-name 示例
// ----------------------------------------------------------
// 规则含义：组件必须有 displayName，否则在 React DevTools
// 里会显示为 Anonymous / Unknown，难以调试。
//
// 推荐配置：["error"]（recommended 默认级别）
// - 可选项：{ ignoreTranspilerName: false }（默认）
//   Babel 等编译器能通过变量名推断 displayName 时，规则会豁免；
//   若设为 true 则要求显式 displayName，任何隐式推断都不算。
//
// 触发点：将组件写成没有名字的匿名函数表达式（React.memo(function(){...})
// 之类）时，React 无法推断名字，就会命中此规则。
//
// 官方文档：
//   https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/display-name.md
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable space-before-function-paren */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/function-component-definition */

import React from "react";

// ---------------- ✅ 正确示例：class 组件带类名 ----------------
class OkNamed extends React.Component {
  render() {
    return <div>ok</div>;
  }
}

// ✅ 正确示例：函数组件通过变量名推断 displayName
const OkFn = function OkFn() {
  return <div>ok</div>;
};

// ---------------- ❌ 错误示例：React.memo 包裹的匿名函数组件 ----------------
// 没有函数名 / 变量名，React 无法推断，命中 react/display-name
const BadMemo = React.memo(function () {
  return <div>bad</div>;
});

export default OkNamed;
