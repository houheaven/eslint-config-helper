
// ==========================================================
// react/forbid-dom-props 示例
// ----------------------------------------------------------
// 规则含义：禁止在 DOM 元素上使用指定的 prop 名。常用于统一
// 项目样式方案 —— 比如强制通过 data-testid 而不是 id，或禁止
// 使用某些非标准属性。
//
// 推荐配置：["error", { forbid: ["id"] }]
//   options.forbid 支持：
//   - "propName"               直接字符串
//   - { propName, disallowedFor: ["div"] } 只在部分元素上禁用
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable react/function-component-definition */
/* eslint-disable object-curly-newline */

import React from "react";

function CustomInput() {
  return <input type="text" />;   // 使用 DOM 元素但不写 id，避免命中规则
}

// ---------------- ✅ 正确示例：不在 DOM 元素上写 id ----------------
function OkView() {
  return (
    <div data-testid="root">
      <span data-testid="badge">ok</span>
      <CustomInput />
    </div>
  );
}

// ---------------- ❌ 错误示例：给 DOM 元素直接写 id ----------------
function BadView() {
  return (
    <div id="root">
      <span id="badge">bad</span>
      <p id="paragraph">bad too</p>
    </div>
  );
}

export { OkView, BadView };
