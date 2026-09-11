
// ==========================================================
// react/iframe-missing-sandbox 示例
// ----------------------------------------------------------
// 规则含义：<iframe> 必须显式声明 sandbox 属性以限制第三方内容
// 权限，避免 XSS、同源访问、脚本执行等风险。
//
// 推荐配置：["error"]
// - sandbox 允许值：allow-forms / allow-modals / allow-orientation-lock /
//   allow-pointer-lock / allow-popups / allow-popups-to-escape-sandbox /
//   allow-presentation / allow-same-origin / allow-scripts /
//   allow-top-navigation / allow-top-navigation-by-user-activation
// - sandbox="" 表示最严格（默认拒绝一切能力）
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-sort-props */

import React from "react";

function Demo() {
  return (
    <div>
      {/* ---------------- ✅ 正确示例：显式声明 sandbox ---------------- */}
      <iframe title="a" src="https://a.com" sandbox="" />
      <iframe title="b" src="https://b.com" sandbox="allow-scripts" />

      {/* ---------------- ❌ 错误示例：缺失 sandbox ---------------- */}
      <iframe title="c" src="https://c.com" />

      {/* ❌ 错误示例：sandbox 非法值 */}
      <iframe title="d" src="https://d.com" sandbox="foo-bar" />
    </div>
  );
}

export default Demo;
