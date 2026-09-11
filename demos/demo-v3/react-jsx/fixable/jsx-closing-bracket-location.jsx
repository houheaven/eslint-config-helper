
// ==========================================================
// react/jsx-closing-bracket-location 示例
// ----------------------------------------------------------
// 规则含义：多行 JSX 中，右尖括号 `>` / `/>` 的位置约束。
//
// 推荐配置：["error", "line-aligned"]
// options（第 2 参数）常见取值：
// - "tag-aligned" ：与开标签字符 `<` 对齐（默认）
// - "line-aligned"：与包含开标签的整行首字符对齐（Airbnb 选择）
// - "after-props" ：紧跟最后一个属性后
// - "props-aligned"：与属性对齐
// 也可传对象分别指定 nonEmpty / selfClosing。
// ==========================================================

/* eslint-disable import/no-unresolved */

import React from "react";

const Demo = () => (
  <div>
    {/* ---------------- ✅ 正确示例：`>` 与整行首字符对齐 ---------------- */}
    <input
      name="foo"
      type="text"
    />

    <button
      disabled
      type="button"
    >
      ok
    </button>

    {/* ---------------- ❌ 错误示例：`/>` 紧跟最后一个属性 ---------------- */}
    <input
      name="foo"
      type="text" />

    {/* ❌ 错误示例：`>` 与开标签 `<` 对齐（tag-aligned 风格） */}
    <button
      disabled
      type="button"
      >
      bad
    </button>
  </div>
);

export default Demo;
