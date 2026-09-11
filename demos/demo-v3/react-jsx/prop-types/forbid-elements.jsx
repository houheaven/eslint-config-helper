
// ==========================================================
// react/forbid-elements 示例
// ----------------------------------------------------------
// 规则含义：禁止在 JSX 中使用指定的元素名（DOM 标签或组件）。
// 常用于禁用已废弃 / 有安全隐患 / 项目内不希望出现的元素。
//
// 推荐配置：["error", { forbid: ["marquee", "blink", "font"] }]
//   options.forbid 支持：
//   - "elementName"                              直接字符串
//   - { element: "elementName", message: "..." } 自定义提示文案
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable react/function-component-definition */
/* eslint-disable object-curly-newline */

import React from "react";

// ---------------- ✅ 正确示例：使用现代/语义化元素 ----------------
function OkPage() {
  return (
    <section>
      <h1>标题</h1>
      <p>正文</p>
      <em>强调</em>
      <strong>加粗</strong>
    </section>
  );
}

// ---------------- ❌ 错误示例：使用已废弃 / 被禁用元素 ----------------
function BadPage() {
  return (
    <section>
      <marquee>跑马灯</marquee>
      <blink>闪烁</blink>
      <font color="red">红色文字</font>
    </section>
  );
}

export { OkPage, BadPage };
