
// ==========================================================
// react/void-dom-elements-no-children 示例
// ----------------------------------------------------------
// 规则含义：HTML void 元素（自闭合、无 children）如
// <img>、<br>、<hr>、<input>、<meta>、<link>、<area>、<base>、
// <col>、<embed>、<source>、<track>、<wbr> 不允许有 children。
// 无论是 JSX 嵌套写法还是 children/dangerouslySetInnerHTML 都不行。
//
// 推荐配置：["error"]
// - 无 options
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-children-prop */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable react/no-danger */

import React from "react";

function Demo() {
  return (
    <div>
      {/* ---------------- ✅ 正确示例：void 元素自闭合 ---------------- */}
      <img src="/a.png" alt="a" />
      <br />
      <hr />
      <input type="text" />

      {/* ---------------- ❌ 错误示例：void 元素带 JSX children ---------------- */}
      <br>不允许</br>

      {/* ❌ 错误示例：void 元素带 children prop */}
      <img src="/b.png" alt="b" children={<span>不允许</span>} />

      {/* ❌ 错误示例：void 元素带 dangerouslySetInnerHTML */}
      <img src="/c.png" alt="c" dangerouslySetInnerHTML={{ __html: "x" }} />
    </div>
  );
}

export default Demo;
