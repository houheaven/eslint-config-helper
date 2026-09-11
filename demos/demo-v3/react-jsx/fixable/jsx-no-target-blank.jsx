
// ==========================================================
// react/jsx-no-target-blank 示例
// ----------------------------------------------------------
// 规则含义：为了防止 tabnabbing 攻击（新标签页脚本反向操纵 opener），
// 所有 target="_blank" 的 <a> / <area> / <form> 都必须显式带上
// rel="noreferrer"（或 noopener noreferrer）。
//
// 推荐配置：["error", { warnOnSpreadAttributes: true, forms: true }]
// - allowReferrer:          默认 false，为 true 时允许只写 rel="noopener"（不推荐）
// - enforceDynamicLinks:    "always" | "never"，动态 href={url} 也强制校验
// - warnOnSpreadAttributes: true 时对 <a {...spread} target="_blank" /> 也报警
//                           （因为 spread 里可能没塞 rel，规则无法静态判定）
// - forms:                  true 时把 <form target="_blank"> 也纳入检查
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable react/jsx-props-no-spreading */

import React from "react";

const spread = { className: "link" };

const Demo = () => (
  <div>
    {/* 正确示例：显式携带 rel=noreferrer */}
    <a href="https://example.com" target="_blank" rel="noreferrer">safe link</a>

    {/* 正确示例：noopener + noreferrer 组合 */}
    <a href="https://example.com" target="_blank" rel="noopener noreferrer">
      safer link
    </a>

    {/* 正确示例：form 显式带 rel */}
    <form action="https://example.com/submit" method="post" target="_blank" rel="noreferrer">
      <button type="submit">ok form</button>
    </form>

    {/* 错误示例：缺失 rel=noreferrer */}
    <a href="https://evil.example" target="_blank">unsafe link</a>

    {/* 错误示例：forms:true 时 form 元素同样受限 */}
    <form action="https://example.com/submit" method="post" target="_blank">
      <button type="submit">bad form</button>
    </form>

    {/* 错误示例：warnOnSpreadAttributes:true 时 spread 后 target=_blank 无法静态判定 rel */}
    <a href="https://x.example" {...spread} target="_blank">spread link</a>
  </div>
);

export default Demo;
