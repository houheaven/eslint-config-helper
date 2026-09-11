
// ==========================================================
// react/checked-requires-onchange-or-readonly 示例
// ----------------------------------------------------------
// 规则含义：<input type="checkbox"|"radio" checked>（React 里传入
// checked 表示受控组件）必须搭配 onChange 或 readOnly，否则会得到
// 运行时 warning：`You provided a "checked" prop to a form field
// without an "onChange" handler.`
//
// 推荐配置：["error"]
// options: { ignoreMissingProperties: false, ignoreExclusiveCheckedAttribute: false }
// - ignoreMissingProperties: 若 checked 没有值，是否忽略
// - ignoreExclusiveCheckedAttribute: 若 checked 是唯一属性，是否忽略
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-sort-props */

import React, { useCallback, useState } from "react";

function Demo() {
  const [checked, setChecked] = useState(false);
  const handleChange = useCallback(() => setChecked(v => !v), []);

  return (
    <div>
      {/* ---------------- ✅ 正确示例：checked + onChange ---------------- */}
      <input type="checkbox" checked={checked} onChange={handleChange} />

      {/* ✅ 正确示例：checked + readOnly（表示只读展示） */}
      <input type="checkbox" checked readOnly />

      {/* ✅ 正确示例：只用 defaultChecked（非受控） */}
      <input type="checkbox" defaultChecked />

      {/* ---------------- ❌ 错误示例：checked 但没有 onChange / readOnly ---------------- */}
      <input type="checkbox" checked />
      <input type="radio" checked={checked} />
    </div>
  );
}

export default Demo;
