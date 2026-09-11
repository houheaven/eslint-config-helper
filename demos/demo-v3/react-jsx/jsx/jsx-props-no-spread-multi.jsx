// ==========================================================
// react/jsx-props-no-spread-multi 示例
// ----------------------------------------------------------
// 规则含义：同一个 JSX 元素上禁止对**同一个 identifier**做多次 spread。
// 例如：<div {...props} {...props} />（同一个变量被 spread 两次）。
// 不同变量的多次 spread（<div {...a} {...b} />）是允许的，这条
// 场景由 react/jsx-props-no-spreading 规则处理。
//
// 推荐配置：["error"] （无 options）
// 官方 v7.34+ 起进入 recommended。
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */

import React from "react";

function Demo() {
  const a = { className: "a" };
  const b = { title: "b" };

  return (
    <div>
      {/* ---------------- 正确示例 ---------------- */}
      {/* 单个 spread */}
      <div {...a} />
      {/* 多个 spread，但都是不同的 identifier —— 本规则不管 */}
      <section {...a} {...b} />

      {/* ---------------- 错误示例：同一个 identifier 出现多次 spread ---------------- */}
      <span {...a} {...a} />
      <p {...b} {...b} />
      <article {...a} {...b} {...a} />
    </div>
  );
}

export default Demo;
