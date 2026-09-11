
// ==========================================================
// react/require-render-return 示例
// ----------------------------------------------------------
// 规则含义：class 组件的 render 方法必须显式 return 一个值
// （JSX / null / false 都行），否则会被判定为忘写 return。
//
// 推荐配置：["error"]（本规则无 options）
// 官方文档：
//   https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-unused-expressions */

import React from "react";

// ---------------- ✅ 正确示例：render 显式 return ----------------
class OkReturn extends React.Component {
  render() {
    return <div>ok</div>;
  }
}

// ✅ 正确示例：return null 同样被认为"显式 return"
class OkReturnNull extends React.Component {
  render() {
    return null;
  }
}

// ---------------- ❌ 错误示例：render 没有 return ----------------
class BadNoReturn extends React.Component {
  render() {
    // 忘了写 return，只留一个 JSX 表达式 —— 组件会渲染 undefined
    <div>bad</div>;
  }
}

// ❌ 错误示例：render 里只写了个字符串表达式，没 return
class BadOnlySideEffect extends React.Component {
  render() {
    // 表达式后就退出 —— render 必须返回可渲染内容
    "no return";
  }
}

export default OkReturn;
