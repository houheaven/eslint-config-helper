
// ==========================================================
// react/jsx-no-duplicate-props 示例
// ----------------------------------------------------------
// 规则含义：同一个 JSX 元素上不允许出现重复的属性名，重复会导致
// 后写的覆盖先写的，产生难以察觉的 bug。
//
// 推荐配置：["error", { ignoreCase: true }]
// - ignoreCase:true（默认）
//   连大小写不同的重名也算重复（如 className / ClassName）
// - ignoreCase:false
//   区分大小写，只有一字一样才报错
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable no-undefined */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-sort-props */
 

import React from "react";

function Demo() {
  return (
    <div>
      {/* ---------------- ✅ 正确示例：没有重名 ---------------- */}
      <input type="text" name="username" className="input" />
      <button type="button" onClick={undefined}>ok</button>

      {/* ---------------- ❌ 错误示例：完全相同的重名属性 ---------------- */}
      <input type="text" type="password" name="pwd" />

      {/* ❌ 错误：大小写不同也算重复（ignoreCase:true） */}
      <div className="a" ClassName="b" />

      {/* ❌ 错误：同一个属性重复三次 */}
      <span title="a" title="b" title="c">dup</span>
    </div>
  );
}

export default Demo;
