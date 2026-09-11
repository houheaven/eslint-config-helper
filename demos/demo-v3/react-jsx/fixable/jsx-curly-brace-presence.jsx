
// ==========================================================
// react/jsx-curly-brace-presence 示例
// ----------------------------------------------------------
// 规则含义：JSX 属性 / 子节点中，字面量能写就不要多余的 `{}` 包裹。
//
// 推荐配置：["error", { props: "never", children: "never" }]
// options:
// - props:
//   - "never"（当前）：属性只有字面字符串时，禁止 <Foo bar={"x"} />，必须写成 bar="x"
//   - "always"        ：反之，属性值必须写在 {} 里
//   - "ignore"        ：不检查
// - children:
//   - "never"（当前）：子节点是字面字符串时禁止 <Foo>{"hi"}</Foo>，直接写成 <Foo>hi</Foo>
//   - "always" / "ignore" 同理
// - propElementValues: "always" | "ignore"（是否允许元素类型的属性用 {}）
// ==========================================================

/* eslint-disable import/no-unresolved */

import React from "react";

const Demo = () => (
  <div>
    {/* ---------------- ✅ 正确示例：属性直接用字符串字面量 ---------------- */}
    <input name="foo" type="text" />

    {/* ✅ 正确示例：子节点直接写文本 */}
    <span>hi</span>

    {/* ---------------- ❌ 错误示例：属性用 `{}` 包裹字符串字面量 ---------------- */}
    <input name={"foo"} type="text" />

    {/* ❌ 错误示例：子节点用 `{}` 包裹字符串字面量 */}
    <span>{"hi"}</span>
  </div>
);

export default Demo;
