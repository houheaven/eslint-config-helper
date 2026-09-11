
// ==========================================================
// react/no-unused-prop-types 示例
// ----------------------------------------------------------
// 规则含义：声明了 propTypes 但组件里从未真正使用的 prop 会被
// 视为死代码，容易迷惑维护者。
//
// 推荐配置：["error"]  （无 options）
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prefer-exact-props */
/* eslint-disable object-curly-newline */

import React from "react";
import PropTypes from "prop-types";

// ---------------- ✅ 正确示例：propTypes 每一项都在组件里被用到 ----------------
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

// ---------------- ❌ 错误示例：propTypes 里声明了但组件里未用到 ----------------
function BadGreeting(props) {
  return <div>{props.name}</div>;
}
BadGreeting.propTypes = {
  age: PropTypes.number.isRequired, // ❌ 声明了但从未使用
  extra: PropTypes.string.isRequired, // ❌ 声明了但从未使用
  name: PropTypes.string.isRequired,
};

export { OkGreeting, BadGreeting };
