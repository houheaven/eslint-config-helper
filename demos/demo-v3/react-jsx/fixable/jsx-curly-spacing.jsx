
// ==========================================================
// react/jsx-curly-spacing 示例
// ----------------------------------------------------------
// 规则含义：JSX 花括号 `{...}` 内部两侧的空格约束。
//
// 推荐配置：["error", { when: "never", allowMultiline: true }]
// options:
// - when:
//   - "never"（当前）：花括号内部禁止空格：<Foo bar={x} />
//   - "always"       ：花括号内部必须有空格：<Foo bar={ x } />
// - allowMultiline: 当花括号内表达式跨多行时是否允许换行（相当于放行）
// 也可以用 { attributes: {...}, children: {...} } 精细控制属性 vs 子节点
//
// 备注：当前配置未显式声明 `children`，因此默认只作用于属性上的花括号，
// 子节点位置的 `<span>{ value }</span>` 不会被该规则拦截（属于设计行为）。
// ==========================================================

/* eslint-disable import/no-unresolved */

import React from "react";

const value = 42;

const Demo = () => (
  <div>
    {/* ---------------- ✅ 正确示例：属性花括号紧贴表达式 ---------------- */}
    <input value={value} />
    {/* ✅ 子节点位置的 `<span>{value}</span>` 也保持花括号紧贴 */}
    <span>{value}</span>

    {/* ---------------- ❌ 错误示例：属性花括号两侧有空格 ---------------- */}
    <input value={ value } />
  </div>
);

export default Demo;
