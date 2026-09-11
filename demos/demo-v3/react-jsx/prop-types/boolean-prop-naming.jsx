
// ==========================================================
// react/boolean-prop-naming 示例
// ----------------------------------------------------------
// 规则含义：布尔 prop 必须使用 is / has / should / can / will / did
// 之类的动词前缀，让 prop 语义与类型一致，避免 `open` 这种名字
// 既像动作又像状态。
//
// 推荐配置：
//   ["error", {
//     rule: "^(is|has|should|can|will|did)[A-Z]([A-Za-z0-9]?)+",
//     message: "布尔 prop 建议使用 is/has/should/can/will/did 前缀",
//   }]
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/sort-prop-types */
/* eslint-disable react/prefer-exact-props */

import React from "react";
import PropTypes from "prop-types";

// ---------------- ✅ 正确示例：使用 is / has / should 前缀 ----------------
function OkModal(props) {
  return (
    <div>
      {props.isOpen}{props.hasHeader}{props.shouldClose}
      {props.canDrag}{props.willUnmount}{props.didMount}{props.title}
    </div>
  );
}
OkModal.propTypes = {
  isOpen: PropTypes.bool,           // ✅ is 前缀
  hasHeader: PropTypes.bool,        // ✅ has 前缀
  shouldClose: PropTypes.bool,      // ✅ should 前缀
  canDrag: PropTypes.bool,          // ✅ can 前缀
  willUnmount: PropTypes.bool,      // ✅ will 前缀
  didMount: PropTypes.bool,         // ✅ did 前缀
  title: PropTypes.string,          // 非布尔不受此规则约束
};
OkModal.defaultProps = {
  canDrag: false,
  didMount: false,
  hasHeader: false,
  isOpen: false,
  shouldClose: false,
  title: "",
  willUnmount: false,
};

// ---------------- ❌ 错误示例：布尔 prop 命名不符合前缀 ----------------
function BadModal(props) {
  return (
    <div>
      {props.open}{props.visible}{props.disabled}{props.loading}{props.title}
    </div>
  );
}
BadModal.propTypes = {
  open: PropTypes.bool,             // ❌ 缺少动词前缀
  visible: PropTypes.bool,          // ❌ 应为 isVisible
  disabled: PropTypes.bool,         // ❌ 应为 isDisabled
  loading: PropTypes.bool,          // ❌ 应为 isLoading
  title: PropTypes.string,
};
BadModal.defaultProps = {
  disabled: false,
  loading: false,
  open: false,
  title: "",
  visible: false,
};

export {
  OkModal,
  BadModal,
};
