
// ==========================================================
// react/button-has-type 示例
// ----------------------------------------------------------
// 规则含义：<button> 必须显式声明 type 属性。
// 因为 HTML 里 <button> 默认 type="submit"，一旦置于 <form> 里
// 就会触发表单提交，是最常见的一类 bug。
//
// 推荐配置：["error", { reset: false }]
// - button:  true  允许 <button type="button">
// - submit:  true  允许 <button type="submit">
// - reset:   false 禁止 <button type="reset">（清空表单，误触发风险高）
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable react/function-component-definition */

import React from "react";

function Demo() {
  return (
    <div>
      {/* ---------------- ✅ 正确示例 ---------------- */}
      <button type="button">普通按钮</button>
      <button type="submit">提交</button>

      {/* ---------------- ❌ 错误示例 ---------------- */}
      {/* 缺少 type，会被默认为 submit */}
      <button>无 type</button>
      {/* 我们配置里禁止了 reset */}
      <button type="reset">重置</button>
      {/* 非法 type 值 */}
      <button type="menu">非法</button>
    </div>
  );
}

export default Demo;
