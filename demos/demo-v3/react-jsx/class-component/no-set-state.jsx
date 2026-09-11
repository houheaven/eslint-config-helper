
// ==========================================================
// react/no-set-state 示例
// ----------------------------------------------------------
// 规则含义：禁止使用 setState —— 面向"纯函数组件 + hooks"的
// 极端严格模式。要求所有可变状态都用 hooks 管理。
//
// 推荐配置：默认 off；仅在纯 hooks 项目里手动开启。
// 本项目已把该规则设为 off，此示例文件通过 inline 注释
// 强制打开为 error，以便演示。
//   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
// ==========================================================

/* eslint react/no-set-state: "error" */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/destructuring-assignment */

import React from "react";

class Toggle extends React.Component {
  state = { on: false };

  // ---------------- ✅ 正确示例：不调用 setState ----------------
  // 例如只是纯展示，或者把可变状态提升到父级 / 改用 hooks
  handleClickOk = () => null;

  // ---------------- ❌ 错误示例：调用 this.setState ----------------
  handleClickBad = () => {
    this.setState({ on: true });
  };

  render() {
    return (
      <div>
        <button type="button" onClick={this.handleClickOk}>ok</button>
        <button type="button" onClick={this.handleClickBad}>bad</button>
        <span>{this.state.on ? "on" : "off"}</span>
      </div>
    );
  }
}

export default Toggle;
