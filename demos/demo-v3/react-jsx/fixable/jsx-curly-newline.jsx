
// ==========================================================
// react/jsx-curly-newline 示例
// ----------------------------------------------------------
// 规则含义：JSX 花括号 `{...}` 内部换行风格约束。
//
// 推荐配置：["error", { multiline: "consistent", singleline: "consistent" }]
// options:
// - multiline:
//   - "consistent"（当前）：花括号内表达式跨多行时，`{` 后与 `}` 前要么都有换行，要么都没有
//   - "require"          ：多行表达式外必须换行
//   - "forbid"           ：多行表达式也不许换行
// - singleline:
//   - "consistent"（当前）：单行表达式两侧要么都没换行（正常情况），要么都有（此规则允许）
//   - "require"           ：单行表达式外仍要求两端换行
//   - "forbid"            ：单行表达式禁止换行
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-parens */

import React from "react";

const list = [1, 2, 3];

const Demo = () => (
  <div>
    {/* ---------------- ✅ 正确示例：多行表达式两端都换行（一致） ---------------- */}
    <div>
      {
        list.map((n) => (
          <span key={n}>{n}</span>
        ))
      }
    </div>

    {/* ---------------- ❌ 错误示例：只有 `{` 后换行，`}` 前没换行 ---------------- */}
    <div>
      {
        list.map((n) => (
          <span key={n}>{n}</span>
        ))}
    </div>

    {/* ❌ 错误示例：只有 `}` 前换行，`{` 后没换行 */}
    <div>
      {list.map((n) => (
        <span key={n}>{n}</span>
      ))
      }
    </div>
  </div>
);

export default Demo;
