
// ==========================================================
// react/no-unstable-nested-components 示例
// ----------------------------------------------------------
// 规则含义：禁止在其他组件的 render 内部定义嵌套组件，因为
// 每次父组件 render 会创建一个新的组件类型，破坏 React 的
// 复用机制，导致子组件永远重挂载、丢失状态、动画中断。
//
// 推荐配置：["error", { allowAsProps: true }]
// - allowAsProps:true 允许把内联组件作为 render prop 传给别人
//   （render prop 是合法且常用的模式）
// - propNamePattern: 可选，指定允许的 render prop 命名模式
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-parens */
/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-no-bind */

import React from "react";

// ---------------- ✅ 正确示例：组件定义在顶层 ----------------
function ItemView({ label }) {
  return <li>{label}</li>;
}

function OkList({ items }) {
  return (
    <ul>
      {items.map((item) => <ItemView key={item.id} label={item.label} />)}
    </ul>
  );
}

// ✅ 正确示例：作为 render prop 传入（allowAsProps:true 允许）
function Panel({ header }) {
  return <div>{header}</div>;
}
function OkRenderProp() {
  return <Panel header={() => <span>标题</span>} />;
}

// ---------------- ❌ 错误示例：在 render 里定义组件 ----------------
function BadList({ items }) {
  // 每次 render 都会重新创建这个组件类型
  function Item({ label }) {
    return <li>{label}</li>;
  }

  return (
    <ul>
      {items.map((item) => <Item key={item.id} label={item.label} />)}
    </ul>
  );
}

export { OkList, OkRenderProp, BadList };
