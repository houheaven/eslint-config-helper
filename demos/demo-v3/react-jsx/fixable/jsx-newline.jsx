// ==========================================================
// react/jsx-newline 示例
// ----------------------------------------------------------
// 规则含义：控制 JSX 兄弟元素之间是否要有空行。
// 官方推荐：无（stylistic）
// 源规则库配置：off；本文件通过 inline override 强制启用。
//
// 内联开启：/* eslint react/jsx-newline: ["error", { prevent: true }] */
// options（第 2 参数）:
// - prevent          : 为 true 时，禁止兄弟 JSX 元素之间出现空行
// - allowMultilines  : 为 true 时，允许多行 JSX 兄弟之间保留空行（默认 false）
// ==========================================================

/* eslint react/jsx-newline: ["error", { prevent: true }] */
/* eslint-disable import/no-unresolved */

import React from "react";

// 正确示例：兄弟 JSX 元素之间没有空行
const Right = () => (
  <div>
    <span>a</span>
    <span>b</span>
    <span>c</span>
  </div>
);

// 错误示例：兄弟 JSX 元素之间有空行
const Wrong = () => (
  <div>
    <span>a</span>

    <span>b</span>

    <span>c</span>
  </div>
);

export default Right;
export {
  Wrong,
};
