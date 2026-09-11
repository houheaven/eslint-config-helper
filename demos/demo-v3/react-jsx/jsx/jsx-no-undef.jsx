
// ==========================================================
// react/jsx-no-undef 示例
// ----------------------------------------------------------
// 规则含义：在 JSX 中使用组件必须先定义（import 或声明），否则报错。
// 与全局 `no-undef` 类似，但专门处理 JSX 场景。
//
// 推荐配置：["error", { allowGlobals: false }]
// - allowGlobals:false（默认）
//   即使某个组件名恰好挂在 window 全局对象上，也**不允许**在 JSX 里裸用
// - allowGlobals:true
//   放行全局作用域下已经存在的标识符
//
// 注：为避免与全局 `no-undef` 报错重叠，本文件顶部 disable 掉 no-undef。
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/destructuring-assignment */

import React from "react";

// 本地声明一个组件供正确示例使用
function LocalCard(props) {
  return <div>{props.title}</div>;
}

function Demo() {
  return (
    <div>
      {/* ---------------- ✅ 正确示例：组件已定义 ---------------- */}
      <LocalCard title="hello" />

      {/* ---------------- ❌ 错误示例：使用未定义的组件 ---------------- */}
      <UndefinedComp />

      {/* ❌ 错误：命名空间形式的未定义组件 */}
      <NoSuchNamespace.Item />
    </div>
  );
}

export default Demo;
