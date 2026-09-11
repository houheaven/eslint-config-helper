
// ==========================================================
// react/no-unused-state 示例
// ----------------------------------------------------------
// 规则含义：class 组件里定义的 state 字段必须在**读**处至少被引用一次，
// 否则视为死代码，容易导致"忘记消费的 state"造成 bug。
//
// 推荐配置：["error"]
// - 无 options
// - 只检查 class 组件的 state（不涉及函数组件 useState）
// - "只在 setState 里被写、从不被读取"会被视为 unused
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-one-expression-per-line */

import React from "react";

class Demo extends React.Component {
  // state 用 class field 初始化（本项目 state-in-constructor:"never"）
  state = {
    // ✅ used：在 render 里 this.state.count 有被读取
    count: 0,
    // ✅ used：在 render 里被读取
    name: "hello",
    // ❌ unused：定义了但从没被读取
    unusedField: 1,
    // ❌ unused：仅在 setState 里被写，从没被读
    onlyWritten: 0,
  };

  handleClick = () => {
    // 只写不读 → onlyWritten 会被 no-unused-state 视为未使用
    this.setState({ onlyWritten: 100 });
  };

  render() {
    return (
      <div onClick={this.handleClick}>
        {this.state.count} - {this.state.name}
      </div>
    );
  }
}

export default Demo;
