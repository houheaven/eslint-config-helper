
// ==========================================================
// react/jsx-boolean-value 示例
// ----------------------------------------------------------
// 规则含义：控制布尔属性写法：<Foo disabled /> 还是 <Foo disabled={true} />。
//
// 推荐配置：["error", "never"]
// options:
// - "never"（默认）：布尔属性省略 ={true}，即 <Foo disabled />
// - "always"        ：布尔属性必须写成 <Foo disabled={true} />
// ==========================================================

/* eslint-disable import/no-unresolved */

import React from "react";

const Demo = () => (
  <div>
    {/* ---------------- ✅ 正确示例：省略 ={true} ---------------- */}
    <input disabled />
    <input readOnly />

    {/* ---------------- ❌ 错误示例：显式写 ={true} ---------------- */}
    <input disabled={true} />
    <input readOnly={true} />
  </div>
);

export default Demo;
