
// ==========================================================
// react/jsx-handler-names 示例
// ----------------------------------------------------------
// 规则含义：JSX 事件相关的命名必须成对：
//   - 组件内部处理函数以 `handle` 前缀
//   - 传入 JSX 的 prop 以 `on` 前缀
//
// 推荐配置：["error", { eventHandlerPrefix: "handle",
//                     eventHandlerPropPrefix: "on" }]
// - eventHandlerPrefix:     函数名前缀（默认 "handle"）
// - eventHandlerPropPrefix: prop 名前缀（默认 "on"）
// - checkLocalVariables:    false 是否检查局部变量作为 handler
//     （默认 false，只检查形如 this.xxx / props.xxx 的成员表达式）
// - checkInlineFunction:    false 是否检查内联箭头函数
//
// 备注：因为默认 checkLocalVariables=false，本示例只能通过
//   this.xxx / props.xxx 形式触发规则；直接把局部函数变量
//   传给 onClick 不会命中该规则。
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/destructuring-assignment */

import React from "react";

// 自定义子组件：允许在其上使用任意 prop（避开 react/no-unknown-property）
function MyButton() {
  return <button type="button">custom</button>;
}

// ---------------- 类组件版本（成员表达式命中规则） ----------------
class DemoClass extends React.Component {
  // 正确：以 handle 开头
  handleClick() { console.log("ok click"); }
  handleSubmit() { console.log("ok submit"); }

  // 错误：不以 handle 开头
  clickHandler() { console.log("bad name"); }
  doClick() { console.log("bad name"); }

  render() {
    return (
      <div>
        {/* 正确：prop on + 函数 handle */}
        <button type="button" onClick={this.handleClick}>ok click</button>
        <form onSubmit={this.handleSubmit}><input /></form>

        {/* 错误：onClick 传入的函数不是 handle 前缀 */}
        <button type="button" onClick={this.clickHandler}>bad name 1</button>
        <button type="button" onClick={this.doClick}>bad name 2</button>

        {/* 错误：prop 名不是 on 前缀，但函数是 handle 前缀 */}
        <MyButton whenClick={this.handleClick} />
      </div>
    );
  }
}

// ---------------- 函数组件版本（用 props.xxx 命中规则） ----------------
function DemoFn(props) {
  return (
    <div>
      {/* 正确：prop on + 函数 handle */}
      <button type="button" onClick={props.handleClick}>ok</button>

      {/* 错误：onClick 传入的 props.xxx 不是 handle 前缀 */}
      <button type="button" onClick={props.clickHandler}>bad</button>

      {/* 错误：prop 名不是 on 前缀，但函数是 handle 前缀 */}
      <MyButton whenClick={props.handleSubmit} />
    </div>
  );
}

export {
  DemoClass,
  DemoFn,
};
