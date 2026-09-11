
// ==========================================================
// react/forward-ref-uses-ref 示例
// ----------------------------------------------------------
// 规则含义：使用 React.forwardRef 包装的组件，其内部函数**必须**
// 声明并使用第二个参数 `ref`；否则说明你根本不需要 forwardRef，
// 应改用普通函数组件。
//
// 推荐配置：["error"]
// ==========================================================

/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
/* eslint-disable arrow-parens */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable react/display-name */
/* eslint-disable react/jsx-props-no-spreading */

import React from "react";

// ---------------- ✅ 正确示例：函数签名带 ref 参数 ----------------
const OkInput1 = React.forwardRef((props, ref) => {
  return <input ref={ref} {...props} />;
});

// ✅ 正确示例：即使不实际转发 ref，只要函数签名声明了 ref 就不报
const OkInput2 = React.forwardRef((props, ref) => {
  return <input {...props} />;
});

// ---------------- ❌ 错误示例：只有 props 参数，没接 ref ----------------
const BadInput1 = React.forwardRef((props) => {
  return <input {...props} />;
});

// ❌ 错误示例：命名 forwardRef 组件同样不能省略 ref 参数
const BadInput2 = React.forwardRef(function BadInput2(props) {
  return <input {...props} />;
});
