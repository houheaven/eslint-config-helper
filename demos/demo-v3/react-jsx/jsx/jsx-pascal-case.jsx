
// ==========================================================
// react/jsx-pascal-case 示例
// ----------------------------------------------------------
// 规则含义：自定义组件的 JSX 元素名必须是 PascalCase（首字母大写，
// 不含分隔符）。规则**只检查首字母大写**的元素——首字母小写的会被
// React 视为原生 DOM 标签，本规则不管。
//
// 推荐配置：["error", { allowAllCaps: true, allowNamespace: true }]
// - allowAllCaps:true
//   允许全大写标签（如 <SVG />、<UI /> 这类缩写），否则会报错
// - allowNamespace:true
//   允许 <UI.Section /> 这种命名空间写法
// - allowLeadingUnderscore:false（默认）
//   仍不允许 `_Foo` 这类前导下划线
// - ignore:[]
//   显式白名单
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-sort-props */

import React from "react";

// 模拟一个"带命名空间"的组件：UI.Section
const UI = {
  Section: props => <section>{props.children}</section>,
};

// 全大写风格的组件（allowAllCaps:true 才允许）
function SVG(props) {
  return <svg width={props.width} height={props.height} />;
}

function MyComp(props) {
  return <div>{props.text}</div>;
}

function Demo() {
  return (
    <div>
      {/* ---------------- ✅ 正确示例 ---------------- */}
      <MyComp text="ok" />
      <SVG width={16} height={16} />
      <UI.Section>ns ok</UI.Section>

      {/* ---------------- ❌ 错误示例：首字母虽大写，但既非 PascalCase 也非全大写 ---------------- */}
      {/* 含下划线：不是 PascalCase，也不是 ALL_CAPS */}
      <My_comp />
      {/* 全部小写又不是 DOM 标签这种情况规则无法检测（会被当成 DOM 元素跳过），
          所以这里改用大写开头 + 非法字符的组合来演示 */}
      <Foo_Bar />
      {/* 大写开头但中间又混了 snake_case */}
      <Some_component />
    </div>
  );
}

export default Demo;
