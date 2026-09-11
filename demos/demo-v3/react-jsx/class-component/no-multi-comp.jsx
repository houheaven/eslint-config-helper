
// ==========================================================
// react/no-multi-comp 示例
// ----------------------------------------------------------
// 规则含义：单文件内禁止定义多个组件。
//
// 推荐配置：["error", { ignoreStateless: true }]
// - ignoreStateless: true  函数组件（无 state 的 SFC）不计入
//   —— 允许把多个小的函数组件写在同一文件中；
// - ignoreStateless: false 默认，函数组件也算，只允许一个组件
//
// 由于本项目已开启 ignoreStateless:true，
// 想触发该规则就必须在同一文件里写 **多个 class 组件**。
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable max-classes-per-file */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/function-component-definition */

import React from "react";

// ---------------- ✅ 正确示例 ----------------
// 一个 class 组件 + 多个函数组件（函数组件被 ignoreStateless 豁免）
function Header() {
  return <header>header</header>;
}

function Footer() {
  return <footer>footer</footer>;
}

class OnlyOneClass extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}

// ---------------- ❌ 错误示例 ----------------
// 同文件出现第二个 class 组件 —— 会被 no-multi-comp 报错
class SecondClass extends React.Component {
  render() {
    return <span>second</span>;
  }
}

// ❌ 第三个 class 组件也会报
class ThirdClass extends React.Component {
  render() {
    return <span>third</span>;
  }
}

export default OnlyOneClass;
