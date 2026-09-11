
// ==========================================================
// react/no-unescaped-entities 示例
// ----------------------------------------------------------
// 规则含义：JSX 文本节点里禁止出现未转义的 HTML 实体字符，
// 因为它们容易与 JSX 语法混淆（比如 } 会误解析为表达式结束）。
//
// 推荐配置：["error", { forbid: [">", "\"", "'", "}"] }]
// 默认禁止的字符：> " ' }
// - 其中 > 和 } 在 JSX 里 parser 会**直接**抛 Parsing error
//   （无法用 eslint-disable 抑制），因此本文件只演示 " 和 '
// - >  用 &gt; 或 {">"}
// - "  用 &quot; 或 &ldquo;/&rdquo;
// - '  用 &apos; 或 &lsquo;/&rsquo;
// - }  用 &#125; 或 {"}"}
// ==========================================================

/* eslint react/no-unescaped-entities: ["error", { "forbid": [">", "\"", "'", "}"] }] */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import React from "react";

function Demo() {
  return (
    <div>
      {/* ---------------- ✅ 正确示例：用 HTML 实体或字符串表达式 ---------------- */}
      <p>正确：a &gt; b</p>
      <p>正确：{"a > b"}</p>
      <p>正确：say &quot;hi&quot;</p>
      <p>正确：{"it's ok"}</p>
      <p>正确：&#125;</p>

      {/* ---------------- ❌ 错误示例：直接写未转义实体 ---------------- */}
      <p>错误：say "hi"</p>
      <p>错误：it's ok</p>
    </div>
  );
}

export default Demo;
