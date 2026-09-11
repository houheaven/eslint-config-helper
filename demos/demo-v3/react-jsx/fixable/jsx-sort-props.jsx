
// ==========================================================
// react/jsx-sort-props 示例
// ----------------------------------------------------------
// 规则含义：强制 JSX 属性按一定顺序排列，便于横向对比、避免 diff 噪声。
//
// 推荐配置：
//   ["error", { callbacksLast: true, shorthandFirst: true, ignoreCase: true, reservedFirst: true }]
// - reservedFirst:  true 时 React 保留字（key / ref / dangerouslySetInnerHTML）永远排最前
// - shorthandFirst: true 时布尔简写（<Foo disabled />）优先
// - callbacksLast:  true 时 onXxx 事件永远排最末
// - ignoreCase:     true 时排序时不区分大小写
// - noSortAlphabetically / multiline / locale / shorthandLast 等其它可选项
// 目标排序：reserved → shorthand → 普通字母序 → callbacks
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable no-empty-function */

import React from "react";

const handleClick = () => {};
const handleChange = () => {};

const OkChild = () => null;

const Demo = () => (
  <div>
    {/* 正确示例：reserved(key) → shorthand(disabled) → 普通(alpha/beta) → callbacks(onClick) */}
    <OkChild
      key="k1"
      disabled
      alpha="a"
      beta="b"
      onClick={handleClick}
    />

    {/* 正确示例：reserved(ref) → shorthand(required) → callbacks(onChange) */}
    <OkChild
      ref={null}
      required
      onChange={handleChange}
    />

    {/* 错误示例：普通属性在 shorthand 之前，且 callback 排在了中间 */}
    <OkChild
      alpha="a"
      disabled
      onClick={handleClick}
      beta="b"
    />

    {/* 错误示例：reserved key 没有排在最前面 */}
    <OkChild
      alpha="a"
      key="k2"
      onClick={handleClick}
    />

    {/* 错误示例：callback 排在普通属性前面 */}
    <OkChild
      onClick={handleClick}
      alpha="a"
      beta="b"
    />
  </div>
);

export default Demo;
