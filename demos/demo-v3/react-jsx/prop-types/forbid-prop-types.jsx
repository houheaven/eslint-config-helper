// ==========================================================
// react/forbid-prop-types 示例
// ----------------------------------------------------------
// 规则含义：禁止使用过于宽泛的 propTypes 类型（默认禁 any /
// array / object），逼开发者用更精确的 arrayOf / shape / exact 等，
// 让组件 API 更清晰。
//
// 推荐配置：["error", { forbid: ["any", "array", "object"] }]
//   options:
//   - forbid: string[] 需要禁用的类型
//   - checkContextTypes: boolean 是否检查 contextTypes
//   - checkChildContextTypes: boolean 是否检查 childContextTypes
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-exact-props */
/* eslint-disable object-curly-newline */
/* eslint-disable arrow-parens */

import React from "react";
import PropTypes from "prop-types";

// ---------------- ✅ 正确示例：使用精确类型 ----------------
function OkCard(props) {
  return (
    <div>
      {props.tags.map((t) => (
        <span key={t}>{t}</span>
      ))}
      <em>{props.meta.name}</em>
    </div>
  );
}
OkCard.propTypes = {
  meta: PropTypes.shape({ name: PropTypes.string.isRequired }),
  tags: PropTypes.arrayOf(PropTypes.string),
};
OkCard.defaultProps = {
  meta: { name: "" },
  tags: [],
};

// ---------------- ❌ 错误示例：使用被禁用的宽泛类型 ----------------
function BadCard(props) {
  return (
    <div>
      {JSON.stringify(props.meta)}
      {String(props.tags)}
      {String(props.raw)}
    </div>
  );
}
BadCard.propTypes = {
  meta: PropTypes.object,     // ❌ 禁止 object
  raw: PropTypes.any,         // ❌ 禁止 any
  tags: PropTypes.array,      // ❌ 禁止 array
};
BadCard.defaultProps = {
  meta: {},
  raw: null,
  tags: [],
};

export { OkCard, BadCard };
