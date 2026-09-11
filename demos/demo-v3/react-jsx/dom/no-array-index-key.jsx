
// ==========================================================
// react/no-array-index-key 示例
// ----------------------------------------------------------
// 规则含义：数组 map 渲染时禁止使用数组索引 index 作为 key。
// 当列表发生插入/删除/重排时，index 会重新分配到不同项上，
// React 会误以为组件"更新"，导致状态错位、动画错乱、性能问题。
//
// 推荐配置：["warn"]
// - Airbnb / Next.js 都用 warn（少数场景 index 是合理的：静态、只增不删且不重排）
// - 该规则无 options
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-parens */
/* eslint-disable react/function-component-definition */

import React from "react";

function Demo() {
  const items = [
    { id: "a", label: "苹果" },
    { id: "b", label: "香蕉" },
    { id: "c", label: "橙子" },
  ];

  return (
    <div>
      {/* ---------------- ✅ 正确示例：使用稳定的唯一 id 作为 key ---------------- */}
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.label}</li>
        ))}
      </ul>

      {/* ---------------- ❌ 错误示例：用 index 作为 key ---------------- */}
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.label}</li>
        ))}
      </ul>

      {/* ❌ 错误示例：模板字符串套 index 也算 */}
      <ul>
        {items.map((item, i) => (
          <li key={`item-${i}`}>{item.label}</li>
        ))}
      </ul>
    </div>
  );
}

export default Demo;
