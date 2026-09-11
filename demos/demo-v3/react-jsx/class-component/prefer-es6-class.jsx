
// ==========================================================
// react/prefer-es6-class 示例
// ----------------------------------------------------------
// 规则含义：优先使用 ES6 class 语法定义组件，禁止使用
// createReactClass —— 后者已被 React 官方抽为独立包，
// 属于遗留 API。
//
// 推荐配置：["error", "always"]
// - "always"（本项目采用）：强制使用 ES6 class，一旦出现
//   createReactClass 就报错；
// - "never"：反过来，强制使用 createReactClass。
//
// 提示：createReactClass 需要额外安装 `create-react-class`
// 才能真正运行；此示例仅演示代码字面量，不需要能跑。
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/no-unused-class-component-methods */

import React from "react";
import createReactClass from "create-react-class";

// ---------------- ✅ 正确示例：ES6 class ----------------
class OkComponent extends React.Component {
  render() {
    return <div>ok</div>;
  }
}

// ---------------- ❌ 错误示例：使用 createReactClass ----------------
const BadComponent = createReactClass({
  displayName: "BadComponent",
  render() {
    return <div>bad</div>;
  },
});

export default OkComponent;
