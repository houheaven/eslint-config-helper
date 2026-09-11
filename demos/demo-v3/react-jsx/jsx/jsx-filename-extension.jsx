
// ==========================================================
// react/jsx-filename-extension 示例
// ----------------------------------------------------------
// 规则含义：JSX 只允许出现在指定后缀的文件里（默认只允许 .jsx）。
//
// 推荐配置：["error", { extensions: [".jsx", ".tsx"] }]
// - extensions: 允许出现 JSX 的文件扩展名白名单
// - allow: "always" | "as-needed"（可选）
//   as-needed 表示只有当文件确实用到 JSX 时才要求白名单
//
// 演示技巧：因为规则触发只跟文件扩展名有关，本文件本身是 .jsx
// 不会触发默认配置。使用官方文档推荐的做法，通过顶部 inline
// override 把允许列表改成 [".foo"]，让当前 .jsx 触发规则。
// ==========================================================

/* eslint react/jsx-filename-extension: ["error", { extensions: [".foo"] }] */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/function-component-definition */

import React from "react";

// ---------------- 正确示例 ----------------
// 如果没有这个 inline override，本文件（.jsx）在推荐配置
// { extensions: [".jsx", ".tsx"] } 下就是合法的，不报错。

// ---------------- 错误示例 ----------------
// 因为我们把允许列表覆盖为 [".foo"]，所以任何在本 .jsx 文件里
// 出现的 JSX 都会被判定为"非法后缀"。规则报错点位于第一处 JSX。
function Demo() {
  return <div>此 JSX 触发 jsx-filename-extension：本文件后缀不在允许列表内</div>;
}

export default Demo;
