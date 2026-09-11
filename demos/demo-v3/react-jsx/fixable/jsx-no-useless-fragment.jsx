
// ==========================================================
// react/jsx-no-useless-fragment 示例
// ----------------------------------------------------------
// 规则含义：禁止无意义的 Fragment。以下场景视为"无意义"：
// - 只有单个非文本子元素的 <>...</> 或 <Fragment>...</Fragment>
// - 直接嵌套在 HTML 元素里的 Fragment（相当于外层再多一层空包装）
//
// 推荐配置：["error", { allowExpressions: true }]
// - allowExpressions: true 时，允许 <>{someExpr}</>（如把 map 表达式包成 Fragment）
//   便于向下传递或组合场景；false（默认）则连表达式子元素也算无用 Fragment。
//
// 备注：eslint-plugin-react 会额外校验"Fragment 直接嵌在 HTML 元素里"这种
//   情形（ChildOfHtmlElement），因此本示例把所有 Fragment 都放在**函数返回**
//   或**自定义组件**下面，以专门演示 NeedsMoreChildren 那条子规则。
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-fragments */

import React from "react";

const list = ["a", "b", "c"];

// ---------------- 正确示例：Fragment 承担多子节点包装 ----------------
const OkMulti = () => (
  <>
    <div>1</div>
    <span>2</span>
  </>
);

// ---------------- 正确示例：allowExpressions:true 时允许包裹表达式 ----------------
const OkExpression = () => (
  <>{list.map(v => <span key={v}>{v}</span>)}</>
);

// ---------------- 错误示例：Fragment 只裹单个 JSX 子节点 ----------------
const BadSingleChild = () => (
  <>
    <div>only-child</div>
  </>
);

// ---------------- 错误示例：显式 React.Fragment 且只有一个子节点 ----------------
const BadReactFragment = () => (
  <React.Fragment>
    <p>fragment single child</p>
  </React.Fragment>
);

export {
  OkMulti,
  OkExpression,
  BadSingleChild,
  BadReactFragment,
};
