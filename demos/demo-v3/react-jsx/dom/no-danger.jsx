
// ==========================================================
// react/no-danger 示例
// ----------------------------------------------------------
// 规则含义：警告使用 dangerouslySetInnerHTML —— 该属性会直接把
// 字符串以 innerHTML 的形式注入 DOM，存在 XSS 风险，只能用于
// 已充分转义/清洗后的内容。
//
// 推荐配置：["warn"]
// - 有合法场景（渲染富文本、Markdown 输出），人工确认即可
// - Airbnb / Next.js 都用 warn 而不是 error
// - 该规则无 options
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable react/function-component-definition */

import React from "react";

function Demo() {
  const safeHtml = "<b>安全的富文本</b>";

  return (
    <div>
      {/* ---------------- ✅ 正确示例：直接渲染文本节点 ---------------- */}
      <div>普通文本内容</div>

      {/* ✅ 正确示例：JSX 内嵌 React 元素 */}
      <div><b>使用 JSX 表达强调</b></div>

      {/* ---------------- ❌ 错误示例：使用 dangerouslySetInnerHTML ---------------- */}
      <div dangerouslySetInnerHTML={{ __html: safeHtml }} />

      {/* ❌ 错误示例：即使 __html 是常量字符串也会 warn */}
      <div dangerouslySetInnerHTML={{ __html: "<i>x</i>" }} />
    </div>
  );
}

export default Demo;
