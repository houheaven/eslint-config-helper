// ==========================================================
// react/prop-types 示例
// ----------------------------------------------------------
// 规则含义：如果组件读取了某个 prop，就必须在 propTypes 中为它
// 声明类型（TS 项目常可关闭，改用类型系统）。
//
// 推荐配置：["error"]（recommended，无 options）
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prefer-exact-props */
/* eslint-disable object-curly-newline */

import React from "react";
import PropTypes from "prop-types";

// ---------------- ✅ 正确示例：propTypes 里给每个使用到的 prop 都声明 ----------------
function OkGreeting(props) {
  return (
    <div>
      {props.name} - {props.age}
    </div>
  );
}
OkGreeting.propTypes = {
  age: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

// ---------------- ❌ 错误示例：使用了 prop 但没在 propTypes 中声明 ----------------
function BadGreeting(props) {
  return (
    <div>
      {props.name} {/* ❌ 未声明 */}
      {props.age} {/* ❌ 未声明 */}
      {props.title} {/* ❌ 未声明 */}
    </div>
  );
}

export { OkGreeting, BadGreeting };
