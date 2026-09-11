
// ==========================================================
// react/default-props-match-prop-types 示例
// ----------------------------------------------------------
// 规则含义：defaultProps 中出现的 key 必须存在于 propTypes 中；
// 且 required 的 prop 不能有 defaultProps（当 allowRequiredDefaults
// 为 false 时）。
//
// 推荐配置：["error", { allowRequiredDefaults: false }]
// - allowRequiredDefaults:false（默认，禁止给 required 加 default）
// - allowRequiredDefaults:true 允许 required prop 有默认值
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-exact-props */
/* eslint-disable object-curly-newline */

import React from "react";
import PropTypes from "prop-types";

// ---------------- ✅ 正确示例：defaultProps key 都在 propTypes 中 ----------------
function OkGreeting(props) {
  return (
    <div>
      {props.name}
      {props.age}
    </div>
  );
}
OkGreeting.propTypes = {
  age: PropTypes.number,
  name: PropTypes.string,
};
OkGreeting.defaultProps = {
  age: 0,
  name: "",
};

// ---------------- ❌ 错误示例 1：defaultProps 里出现 propTypes 里没有的 key ----------------
function BadGreeting1(props) {
  return <div>{props.name}</div>;
}
BadGreeting1.propTypes = {
  name: PropTypes.string,
};
BadGreeting1.defaultProps = {
  age: 0,        // ❌ propTypes 里没有 age（会命中 default-props-match-prop-types）
  name: "",
};

// ---------------- ❌ 错误示例 2：required prop 竟然给了 defaultProps ----------------
function BadGreeting2(props) {
  return (
    <div>
      {props.name}
      {props.age}
    </div>
  );
}
BadGreeting2.propTypes = {
  age: PropTypes.number.isRequired, // required
  name: PropTypes.string,
};
BadGreeting2.defaultProps = {
  age: 0, // ❌ required prop 不允许配置 defaultProps
  name: "匿名",
};

export { OkGreeting, BadGreeting1, BadGreeting2 };
