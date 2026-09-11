
// ==========================================================
// react/jsx-child-element-spacing 示例
// ----------------------------------------------------------
// 规则含义：当 JSX 文本节点与相邻的行内元素处于**不同行**时，
// 中间必须显式加空格（用 `{" "}` 或行首/行尾留空格），否则视觉上
// 相连的两段文字在页面上会被 React 合并为**没有空格**的一坨。
//
// 官方推荐：无（未进入 recommended），本规则**无 options**。
// 本项目源配置为 "off"，为了演示，本文件顶部内联开启为 "error"。
// ==========================================================

/* eslint react/jsx-child-element-spacing: "error" */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-one-expression-per-line */

import React from "react";

function Demo() {
  return (
    <div>
      {/* ---------------- 正确示例 ---------------- */}
      {/* 同一行内文本与内联元素之间自带空格 */}
      <p>Here is <a href="/x">a link</a> inline.</p>

      {/* 跨行时显式使用 {" "} 补一个空格 */}
      <p>
        Here is
        {" "}
        <a href="/x">a link</a>
        {" "}
        that renders with spaces.
      </p>

      {/* ---------------- 错误示例 ---------------- */}
      {/* 文本与内联元素跨行，中间没有显式空格 */}
      <p>
        Here is
        <a href="/x">a link</a>
        without a space.
      </p>
    </div>
  );
}

export default Demo;
