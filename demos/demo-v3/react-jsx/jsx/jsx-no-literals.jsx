
// ==========================================================
// react/jsx-no-literals 示例
// ----------------------------------------------------------
// 规则含义：JSX 文本节点中禁止直接出现字面量字符串（提醒使用 i18n）。
// 项目默认配置为 off，此文件通过 inline override 强制打开以做演示。
//
// 推荐配置（项目内）：off
// 常见 options：
// - noStrings（默认 false）：为 true 时把 {"xxx"} 这种 JSXExpressionContainer 里的
//   字符串也算作字面量（更严格）
// - allowedStrings：白名单字符串数组，例如 [".", "|", ":"] 等标点
// - ignoreProps（默认 false）：忽略 JSX 属性上的字符串字面量
// - noAttributeStrings（默认 false）：为 true 时属性字符串也报错
// ==========================================================

/* eslint react/jsx-no-literals: "error" */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-curly-brace-presence */

import React from "react";

// mock 一个 i18n 翻译函数
function t(key) {
  return key;
}

function Demo() {
  return (
    <div>
      {/* ---------------- ✅ 正确示例：使用翻译函数或 JSX 表达式 ---------------- */}
      <p>{t("hello")}</p>
      {/* ✅ 正确：字符串放在 JSX 表达式里（默认 noStrings:false 时允许） */}
      <span>{"static text"}</span>
      {/* ✅ 正确：变量插值 */}
      <label>{t("username")}</label>

      {/* ---------------- ❌ 错误示例：直接把字面量写在 JSX 文本节点里 ---------------- */}
      <p>Hello world</p>
      <span>这里是中文字面量</span>
      <button type="button">Click me</button>
    </div>
  );
}

export default Demo;
