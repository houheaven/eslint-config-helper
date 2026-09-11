
// ==========================================================
// react/no-invalid-html-attribute 示例
// ----------------------------------------------------------
// 规则含义：校验 JSX 属性值是否符合 HTML 规范。
// 目前只支持校验 `rel` 属性（对应 <a>、<link>、<form> 等）。
//
// 推荐配置：["error", ["rel"]]
// - 第二参数是需要校验的属性名数组，默认就是 ["rel"]
// - rel 值必须来自 HTML spec 合法列表：
//   noopener / noreferrer / nofollow / external / help / license
//   next / prev / search / tag / bookmark / author / dns-prefetch
//   preconnect / preload / prefetch / stylesheet / icon / canonical
//   alternate / manifest / modulepreload / pingback ...
// ==========================================================

/* eslint react/no-invalid-html-attribute: ["error", ["rel"]] */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-type-assertion */

import React from "react";

function Demo() {
  return (
    <div>
      {/* ---------------- ✅ 正确示例 ---------------- */}
      <a href="https://a.com" target="_blank" rel="noopener noreferrer">ok</a>
      <link rel="stylesheet" href="/a.css" />
      <link rel="icon" href="/favicon.ico" />
      <a href="/nav" rel="next">next</a>

      {/* ---------------- ❌ 错误示例 ---------------- */}
      {/* 单词拼错 */}
      <a href="https://a.com" target="_blank" rel="noreferer">拼错</a>
      {/* 非法关键字 */}
      <a href="https://a.com" rel="nofollo">非法值</a>
      {/* rel 值不能是布尔或数字 */}
      <a href="https://a.com" rel={true as unknown as string}>布尔值</a>
      <a href="https://a.com" rel={123 as unknown as string}>数字</a>
      {/* rel 不能为空字符串 */}
      <a href="https://a.com" rel="">空串</a>
    </div>
  );
}

export default Demo;
