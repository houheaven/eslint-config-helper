
// ==========================================================
// react/no-danger-with-children 示例
// ----------------------------------------------------------
// 规则含义：dangerouslySetInnerHTML 会替换所在节点的全部子内容，
// 若同时又传了 children，会导致运行时冲突（children 被忽略并抛错）。
// 因此禁止两者同时出现。
//
// 推荐配置：["error"]
// - 官方 recommended，无 options
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable react/no-danger */
/* eslint-disable react/no-children-prop */

import React from "react";

function Demo() {
  const html = { __html: "<b>x</b>" };
  return (
    <div>
      {/* ---------------- ✅ 正确示例：只用 dangerouslySetInnerHTML ---------------- */}
      <div dangerouslySetInnerHTML={html} />

      {/* ✅ 正确示例：只用 children */}
      <div>普通内容</div>

      {/* ---------------- ❌ 错误示例：显式传 children prop 又给 __html ---------------- */}
      <div dangerouslySetInnerHTML={html} children={<span>冲突</span>} />

      {/* ❌ 错误示例：同时传 __html 和字符串 children */}
      <div dangerouslySetInnerHTML={html}>文字冲突</div>
    </div>
  );
}

export default Demo;
