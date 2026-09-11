
// ==========================================================
// react/jsx-props-no-spreading 示例
// ----------------------------------------------------------
// 规则含义：禁止在 JSX 上使用 spread 属性 (`{...props}`)。
// spread 会让阅读者无法直观看到组件真正传入了哪些属性，尤其
// 在 html 元素上 spread 未知属性还会污染 DOM。
//
// 推荐配置：
//   ["error", { html: "enforce", custom: "ignore", explicitSpread: "ignore" }]
// - html: "enforce"        html 原生元素上禁止 spread
// - custom: "ignore"       自定义组件（首字母大写）允许 spread
// - explicitSpread: "ignore" 显式列出所有 key 的 spread 允许放行
//   （例：<div {...{ id, className }} />）
// - exceptions: []         可白名单具体 tag/组件名
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */

import React from "react";

// 一个自定义组件（首字母大写）
function CustomComp({ title }) {
  return <span title={title}>custom</span>;
}

function Demo(props) {
  const htmlProps = { id: "root", className: "box" };
  const compProps = { title: "hi" };

  return (
    <div>
      {/* ---------------- 正确示例 ---------------- */}
      {/* 自定义组件被 custom:"ignore" 放行 */}
      <CustomComp {...compProps} />
      <CustomComp {...props} />

      {/* explicitSpread:"ignore" —— 花括号里显式列出所有 key 也放行 */}
      <div {...{ id: "explicit", className: "ok" }} />

      {/* ---------------- 错误示例 ---------------- */}
      {/* 对 html 元素做变量 spread —— 触发 html:"enforce" */}
      <div {...htmlProps} />
      <span {...htmlProps} />
      <a {...htmlProps} href="/" />
    </div>
  );
}

export default Demo;
