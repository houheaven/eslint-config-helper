
// ==========================================================
// react/jsx-uses-react 示例
// ----------------------------------------------------------
// 规则含义：这是一条“保护性规则”，不会产生独立的报错。
// 它的作用是：当代码里只出现 JSX（没有显式引用 React 变量），
// 也要把 `React` 标记为“已使用”，避免 no-unused-vars 把 React
// 误判为未使用。适用于 React 17 之前的老 JSX transform。
//
// 推荐配置：["error"] （无 options）
// - 官方 recommended（默认 error）
// - React 17+ 使用新的 JSX transform 时可关闭（jsx-runtime preset 会 off）
//
// 说明：本规则不会独立产生错误提示，因此本文件只演示“正确写法”
// 场景（帮助读者理解规则用途）；没有可演示的错误 case。
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */

import React from "react";

// ---------------- 正确示例 ----------------
// 只写 JSX，不显式使用 React 变量。
// 若关闭 react/jsx-uses-react，no-unused-vars 会把上面这行
// `import React ...` 报成未使用变量；开启本规则后就不会误报。
const X = () => <div>只写 JSX，未显式引用 React 变量</div>;

// 依旧允许显式使用 React
const Y = () => React.createElement("div", null, "显式调用 React");

export default X;
