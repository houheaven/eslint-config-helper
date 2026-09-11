
// ==========================================================
// react/no-children-prop 示例
// ----------------------------------------------------------
// 规则含义：children 应该以 JSX 嵌套的方式传递，而不是作为
// prop 显式传入。显式传 children prop 会绕过 React 的
// 特殊约定，且失去 JSX 的可读性。
//
// 推荐配置：["error", { allowFunctions: true }]
// - allowFunctions:true 允许 <Comp>{() => ...}</Comp> 这种 render props 模式
//   （render props 是合法且常用的模式）
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-parens */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-one-expression-per-line */

import React from "react";

function Wrapper({ children }) {
  return <div>{children}</div>;
}

function RenderComp({ children }) {
  return children("hello");
}

function Demo() {
  return (
    <div>
      {/* ---------------- ✅ 正确示例：通过 JSX 嵌套传 children ---------------- */}
      <Wrapper>
        <span>正常嵌套</span>
      </Wrapper>

      {/* ✅ 正确示例：render props 模式（allowFunctions:true 允许） */}
      <RenderComp>
        {(name) => <span>hi {name}</span>}
      </RenderComp>

      {/* ---------------- ❌ 错误示例：显式传 children prop ---------------- */}
      <Wrapper children={<span>不允许</span>} />

      {/* ❌ 错误示例：children 用字符串 prop 传 */}
      <Wrapper children="也不允许" />
    </div>
  );
}

export default Demo;
