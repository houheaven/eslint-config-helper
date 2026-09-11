
// ==========================================================
// react/no-namespace 示例
// ----------------------------------------------------------
// 规则含义：React 不支持 XML 命名空间语法（<ns:tag/>、<Comp:sub/>），
// 若写了会解析成不识别的标签或直接抛错。
//
// 推荐配置：["error"]
// - 无 options
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable react/function-component-definition */

import React from "react";

function Demo() {
  return (
    <div>
      {/* ---------------- ✅ 正确示例：普通 JSX 标签 ---------------- */}
      <div>ok</div>
      <span>ok</span>

      {/* ---------------- ❌ 错误示例：使用命名空间语法 ---------------- */}
      <ns:div>bad</ns:div>
      <foo:bar>bad</foo:bar>
    </div>
  );
}

export default Demo;
