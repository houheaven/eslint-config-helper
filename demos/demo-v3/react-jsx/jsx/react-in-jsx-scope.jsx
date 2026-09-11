
// ==========================================================
// react/react-in-jsx-scope 示例
// ----------------------------------------------------------
// 规则含义：使用 JSX 时，`React` 必须在当前作用域内可见（即
// 必须 import React），因为老 JSX transform 会把 <div /> 编译
// 成 `React.createElement("div")`，没有 React 变量会运行时报错。
//
// 推荐配置：["error"] （无 options）
// - 官方 recommended（默认 error）
// - React 17+ 使用新 JSX transform 时可关闭（jsx-runtime preset 会 off）
// - 本项目 demo 尚未启用新 transform，因此保持 error
//
// 注意：本规则和 `no-undef` 关系密切；不 import React 时
// no-undef 也会报错，因此本文件在错误示例区间关闭 no-undef，
// 以确保只出现 react/react-in-jsx-scope 报错。
// ==========================================================

/* eslint-disable no-unused-vars */

// 注意：此处**故意不 import React**，用来演示错误示例。
// 由于 React 未在作用域内，一旦下方写 JSX 就会触发本规则。

// ---------------- 错误示例：未 import React 就写 JSX ----------------
const Bad1 = () => <div>没有 import React</div>;
const Bad2 = () => <span>同样触发</span>;

// ---------------- 正确示例 ----------------
// 说明：正确写法应在文件顶部加上 `import React from "react";`。
// 例：
//   import React from "react";
//   const Ok = () => <div>已 import React</div>;
// 由于同一个文件中一旦 import React 就无法触发错误示例，
// 这里以注释形式给出正确写法，避免抑制掉错误示例的报错。

export default Bad1;
