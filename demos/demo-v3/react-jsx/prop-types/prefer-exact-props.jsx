
// ==========================================================
// react/prefer-exact-props 示例
// ----------------------------------------------------------
// 规则含义：优先使用 exact 精确类型（Flow 的 `{|...|}` 或社区库
// `react-immutable-proptypes.contains` / 自定义 exact wrapper），
// 避免多余的 prop 被无声接收。
//
// 推荐配置：["error"]  （无 options）
//
// ★ 依赖 settings：需要在 ESLint config 里额外配置以下 setting，
//   规则才知道 "什么算 exact wrapper"：
//     settings: {
//       propWrapperFunctions: [
//         { property: "exact", exact: true },
//         { property: "forbidExtraProps", exact: true },
//       ],
//     }
//   ⚠ 只有显式声明 `exact: true` 的对象条目才会被识别；
//   纯字符串 / 未标 exact 的对象只参与 forbid-foreign-prop-types 等宽松匹配。
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/destructuring-assignment */

import React from "react";
import PropTypes from "prop-types";

// 假设外部提供了名为 `exact` 的 wrapper（配置到 settings.propWrapperFunctions）
function exact(shape) { return shape; }
// 未在 settings.propWrapperFunctions 中登记的普通 wrapper（用于错误示例 2）
function myShape(fields) { return fields; }

// ---------------- ✅ 正确示例：propTypes 用 exact 包装 ----------------
function OkCard(props) {
  return <div>{props.name}</div>;
}
OkCard.propTypes = exact({
  name: PropTypes.string.isRequired,
});

// ---------------- ❌ 错误示例 1：直接平铺 propTypes 对象 ----------------
function BadCard1(props) {
  return <div>{props.name}</div>;
}
BadCard1.propTypes = {
  name: PropTypes.string.isRequired,   // ❌ 未用 exact 包装
};

// ---------------- ❌ 错误示例 2：用非 exact 的 wrapper（不在 exact 白名单里的函数） ----------------
function BadCard2(props) {
  return <div>{props.name}</div>;
}
BadCard2.propTypes = myShape({
  name: PropTypes.string.isRequired,
});

export {
  OkCard,
  BadCard1,
  BadCard2,
};
