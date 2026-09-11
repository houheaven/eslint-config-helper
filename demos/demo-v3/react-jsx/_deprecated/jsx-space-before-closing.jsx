
// ==========================================================
// react/jsx-space-before-closing 示例（已废弃）
// ----------------------------------------------------------
// 规则含义：控制 JSX 自闭合标签 `/>` 之前是否需要一个空格。
// 已废弃（v7.4.0），替换为 react/jsx-tag-spacing。
//
// 演示用配置（临时启用）：
//   /* eslint react/jsx-space-before-closing: ["error", "always"] */
//
// options（第二参数）：
//   - "always"(默认): <Foo />   ← 必须有空格
//   - "never":         <Foo/>    ← 禁止空格
// ==========================================================

/* eslint react/jsx-space-before-closing: ["error", "always"] */
/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable import/no-unresolved */
/* eslint-disable object-curly-newline */

import React from "react";

// ---------------- ✅ 正确示例："always" 模式下自闭合前有空格 ----------------
function Ok() {
  return (
    <div>
      <img src="/a.png" alt="ok" />
      <br />
      <input type="text" />
    </div>
  );
}

// ---------------- ❌ 错误示例：自闭合前缺少空格 ----------------
function Bad() {
  return (
    <div>
      <img src="/a.png" alt="bad"/>
      <br/>
      <input type="text"/>
    </div>
  );
}

export { Ok, Bad };
