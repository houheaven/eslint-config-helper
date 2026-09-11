
// ==========================================================
// react/jsx-no-script-url 示例
// ----------------------------------------------------------
// 规则含义：禁止 <a href="javascript:..." /> 这样的 URL，因为 javascript:
// 协议属于 XSS 高危来源。应该改用 onClick 事件或普通链接。
//
// 推荐配置：["error"]（本项目未配置额外 options）
// 常见 options：
// - includeFromSettings: boolean，从 settings.linkComponents 里自动扩展要检查的组件
// - [{ name: "Link", props: ["to", "href"] }] 数组形式，用来覆盖自定义 Link 组件
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable no-script-url */
/* eslint-disable react/function-component-definition */

import React from "react";

function Demo() {
  return (
    <div>
      {/* ---------------- ✅ 正确示例：普通 URL / hash / mailto ---------------- */}
      <a href="https://example.com">外部链接</a>
      <a href="#top">页内锚点</a>
      <a href="mailto:a@b.com">邮件</a>

      {/* ---------------- ❌ 错误示例：javascript: URL ---------------- */}
      <a href="javascript:void(0)">危险 URL</a>
      <a href="javascript:alert('xss')">更危险</a>
      {/* ❌ 错误：大写 JAVASCRIPT 也会被识别 */}
      <a href="JAVASCRIPT:void(0)">大小写变体</a>
    </div>
  );
}

export default Demo;
