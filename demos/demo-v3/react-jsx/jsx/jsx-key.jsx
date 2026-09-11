
// ==========================================================
// react/jsx-key 示例
// ----------------------------------------------------------
// 规则含义：数组/迭代渲染出来的 JSX 元素必须带 `key`；
// 缺失、错误顺序、重复都会引起 React reconciler 出错。
//
// 推荐配置：
//   ["error", {
//     checkFragmentShorthand: true,      // 检查 <>...</> 简写
//     checkKeyMustBeforeSpread: true,    // key 必须在 spread 前
//     warnOnDuplicates: true,            // 数组内重复 key 报警
//   }]
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable arrow-parens */
/* eslint-disable react/function-component-definition */

import React from "react";

function Demo() {
  const list = [{ id: 1, name: "a" }, { id: 2, name: "b" }, { id: 3, name: "b" }];
  const spreadItems = [
    { id: 10, name: "x" },
    { id: 11, name: "y" },
  ];

  return (
    <div>
      {/* ---------------- 正确示例 ---------------- */}
      {/* 每个元素都带唯一 key */}
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

      {/* 正确：spread 之前先写 key（checkKeyMustBeforeSpread 通过） */}
      <ul>
        {spreadItems.map((item) => (
          <li key={item.id} {...item} />
        ))}
      </ul>

      {/* 正确：Fragment 简写用普通形式，不带 key 也允许（当前作用域外单独返回除外） */}

      {/* ---------------- 错误示例 ---------------- */}
      {/* 错误：数组 map 缺 key */}
      <ul>
        {list.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>

      {/* 错误：Fragment 简写在 map 里缺 key（checkFragmentShorthand 触发） */}
      <div>
        {list.map((item) => (
          <>
            <span>{item.id}</span>
            <span>{item.name}</span>
          </>
        ))}
      </div>

      {/* 错误：key 写在 spread 后面（checkKeyMustBeforeSpread 触发） */}
      <ul>
        {spreadItems.map((item) => (
          <li {...item} key={item.id} />
        ))}
      </ul>

      {/* 错误：静态数组内出现重复 key（warnOnDuplicates 触发） */}
      <ul>
        {[
          <li key="same">1</li>,
          <li key="same">2</li>,
        ]}
      </ul>
    </div>
  );
}

export default Demo;
