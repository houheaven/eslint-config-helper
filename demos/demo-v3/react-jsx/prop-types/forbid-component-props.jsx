
// ==========================================================
// react/forbid-component-props 示例
// ----------------------------------------------------------
// 规则含义：禁止在自定义组件上使用指定的 prop 名。常用于强制
// 封装 —— 例如禁止外部直接给自定义组件传 className / style，
// 迫使调用方走组件公开的 API（比如 variant / size）。
//
// 推荐配置：["error", { forbid: ["className", "style"] }]
//   options.forbid 支持：
//   - "propName"               直接字符串
//   - { propName, allowedFor } 只在部分组件上放行
//   - { propName, disallowedFor } 只在部分组件上禁用
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-exact-props */
/* eslint-disable object-curly-newline */

import React from "react";
import PropTypes from "prop-types";

function CustomButton(props) {
  return <button type="button">{props.children}</button>;
}
CustomButton.propTypes = { children: PropTypes.node };
CustomButton.defaultProps = { children: null };

function CustomBox(props) {
  return <div>{props.children}</div>;
}
CustomBox.propTypes = { children: PropTypes.node };
CustomBox.defaultProps = { children: null };

// ---------------- ✅ 正确示例：DOM 元素上使用 className / style 依旧允许 ----------------
function OkUsage() {
  return (
    <div className="ok" style={{ padding: 8 }}>
      <span className="badge" style={{ color: "red" }}>
        ok
      </span>
    </div>
  );
}

// ---------------- ❌ 错误示例：给自定义组件直接传 className / style ----------------
function BadUsage() {
  return (
    <CustomBox className="wrap" style={{ padding: 8 }}>
      <CustomButton className="primary">click me</CustomButton>
    </CustomBox>
  );
}

export { OkUsage, BadUsage };
