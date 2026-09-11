
// ==========================================================
// react/no-string-refs 示例
// ----------------------------------------------------------
// 规则含义：禁止使用字符串 ref（React 17+ 已完全废弃），
// 应改为 `React.createRef()` 或回调 ref。
//
// 推荐配置：["error", { noTemplateLiterals: true }]
// - noTemplateLiterals:false（默认） 只禁 `<input ref="name" />`
// - noTemplateLiterals:true  连模板字符串 ref 也禁：
//   `<input ref={`name`} />`
//
// 本项目开启了 noTemplateLiterals:true，因此需要同时演示：
//   1) 普通字符串字面量 ref
//   2) 模板字符串 ref
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable quotes */
/* eslint-disable react/jsx-curly-brace-presence */

import React from "react";

class Demo extends React.Component {
  render() {
    return (
      <div>
        {/* ---------------- ✅ 正确示例：createRef 结果作为 ref ---------------- */}
        <input ref={this.inputRef} />

        {/* ---------------- ❌ 错误示例：字符串字面量 ref ---------------- */}
        <input ref="stringRef" />

        {/* ❌ 另一个字符串 ref */}
        <input ref="anotherStringRef" />

        {/* ❌ 模板字符串 ref（因 noTemplateLiterals:true 也被禁） */}
        <input ref={`templateRef`} />
      </div>
    );
  }
}

Demo.prototype.inputRef = React.createRef();

export default Demo;
