
// ==========================================================
// react/jsx-closing-tag-location 示例
// ----------------------------------------------------------
// 规则含义：多行 JSX 中，闭合标签 `</Foo>` 的位置约束。
//
// 推荐配置：["error", "line-aligned"]
// options：
// - "tag-aligned" （默认）：与开标签的 `<` 列对齐
// - "line-aligned"        ：与包含开标签的整行首字符列对齐（Airbnb 选择）
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-one-expression-per-line */

import React from "react";

const Demo = () => (
  <div>
    {/* ---------------- ✅ 正确示例：`</button>` 与整行首字符对齐 ---------------- */}
    <button type="button">
      ok
    </button>

    {/* ---------------- ❌ 错误示例：`</button>` 缩进错误 ---------------- */}
    <button type="button">
      bad 1
      </button>

    {/* ❌ 错误示例：闭合标签紧接在内容后（同一行也会被判错） */}
    <button type="button">
      bad 2</button>
  </div>
);

export default Demo;
