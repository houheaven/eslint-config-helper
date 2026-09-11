
// ==========================================================
// react/style-prop-object 示例
// ----------------------------------------------------------
// 规则含义：React 的 style prop 只能是**对象**（CSSProperties），
// 传入字符串、数字、null 都是错的。
//
// 推荐配置：["error"]
// options: { allow: [] }
// - allow: string[]，指定哪些自定义组件的 style 允许非对象（例如
//   styled-components 里 style 是字符串模板）
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable react/function-component-definition */

import React from "react";

function Demo() {
  return (
    <div>
      {/* ---------------- ✅ 正确示例：style 是对象 ---------------- */}
      <div style={{ color: "red", fontSize: 14 }}>ok</div>
      <div style={{}}>ok 空对象</div>

      {/* ---------------- ❌ 错误示例：style 是字符串 ---------------- */}
      <div style="color: red">bad string</div>

      {/* ❌ 错误示例：style 是数字 */}
      <div style={123}>bad number</div>

      {/* ❌ 错误示例：style 是 null（React 允许 undefined，但 null 不合规） */}
      <div style={null}>bad null</div>
    </div>
  );
}

export default Demo;
