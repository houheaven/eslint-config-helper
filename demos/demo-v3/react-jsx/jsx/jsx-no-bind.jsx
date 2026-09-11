
// ==========================================================
// react/jsx-no-bind 示例
// ----------------------------------------------------------
// 规则含义：禁止在 JSX 属性上使用 `.bind(this)` 或箭头函数等
// **每次渲染都会产生新引用**的写法，防止子组件浅比较失效、
// 触发不必要的重渲染。
//
// 推荐配置：["error", { ignoreRefs: true }]
// - ignoreDOMComponents: false 是否只针对自定义组件（默认对 DOM 也检查）
// - ignoreRefs:          true  忽略 ref={fn}（当前配置：ref 场景放行）
// - allowArrowFunctions: false 是否允许箭头函数
// - allowBind:           false 是否允许 .bind()
// - allowFunctions:      false 是否允许函数表达式 / 函数声明
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */
/* eslint-disable arrow-parens */
/* eslint-disable space-before-function-paren */
/* eslint-disable react/function-component-definition */

import React, { useCallback, useRef } from "react";

// ---------------- 正确示例（函数组件）：useCallback ----------------
function OkFn() {
  const inputRef = useRef(null);

  // useCallback 结果引用稳定，符合规则
  const handleClick = useCallback(() => {
    console.log("clicked");
  }, []);

  return (
    <div>
      {/* 正确：稳定引用 */}
      <button type="button" onClick={handleClick}>ok</button>

      {/* 正确：ref 场景在 ignoreRefs:true 下允许箭头函数 */}
      <input
        ref={(el) => {
          inputRef.current = el;
        }}
      />
    </div>
  );
}

// ---------------- 正确示例（类组件）：预先绑定的类方法 ----------------
class OkClass extends React.Component {
  // 使用类属性箭头方法：this 已绑定，且引用稳定
  handleClick = () => {
    console.log("clicked");
  };

  render() {
    return <button type="button" onClick={this.handleClick}>ok</button>;
  }
}

// ---------------- 错误示例：内联箭头 + .bind ----------------
class BadClass extends React.Component {
  handleClick() {
    console.log("bad");
  }

  render() {
    return (
      <div>
        {/* 错误：内联箭头函数 */}
        <button type="button" onClick={() => console.log("inline arrow")}>bad 1</button>

        {/* 错误：.bind(this) */}
        <button type="button" onClick={this.handleClick.bind(this)}>bad 2</button>

        {/* 错误：内联 function 表达式 */}
        <button type="button" onClick={function () { console.log("inline fn"); }}>bad 3</button>
      </div>
    );
  }
}

export {
  OkFn,
  OkClass,
  BadClass,
};
