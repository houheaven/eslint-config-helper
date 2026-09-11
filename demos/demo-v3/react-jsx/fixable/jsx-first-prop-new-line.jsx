// ==========================================================
// react/jsx-first-prop-new-line 示例
// ----------------------------------------------------------
// 规则含义：控制 JSX 元素的第一个属性是否需要换行。
// 官方推荐：无（stylistic）
//
// 推荐配置：["error", "multiline-multiprop"]
// options（第 2 参数）:
// - "always"                ：第一个属性总要换行到新的一行
// - "never"                 ：第一个属性禁止换行
// - "multiline"             ：只要 JSX 是多行的，第一个属性就必须换行
// - "multiline-multiprop"   ：多行 且 多属性时，第一个属性必须换行；其它情况随意
// - "multiprop"             ：只要有多个属性，第一个属性就必须换行
// ==========================================================

/* eslint-disable react/jsx-sort-props */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable import/no-unresolved */

import React from "react";

const Demo = () => (
  <div>
    {/* 正确示例：单行 单属性，首属性不换行 */}
    <input type="text" />

    {/* 正确示例：单行 多属性，首属性不换行 */}
    <input type="text" name="foo" />

    {/* 正确示例：多行 单属性，首属性无需换行（当前策略允许） */}
    <input type="text"
    />

    {/* 正确示例：多行 多属性，首属性必须换行 */}
    <input
      type="text"
      name="foo"
    />

    {/* 错误示例：多行 且 多属性，首属性没换行 */}
    <input type="text"
      name="foo"
    />
  </div>
);

export default Demo;
