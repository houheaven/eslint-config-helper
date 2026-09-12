
// ==========================================================
// eslint-plugin-react-hooks - other
// ----------------------------------------------------------
// 未匹配到「deprecated / fixable / suggestion」维度的规则；
// 启用一律 "error"（不可自动修复，必须人工介入）。
// ==========================================================

module.exports = {
  rules: {
    // Rules of Hooks（顶层 Hook / 仅在函数组件或自定义 Hook 内调用）
    // ----------------------------------------------------------
    // 官方推荐：recommended（默认 error）
    // options: 无
    // 社区最佳：一律 error；React 官方 "Rules of Hooks" 硬性约束，一旦违反会引发 bug
    //   - 官方文档：https://react.dev/reference/rules/rules-of-hooks
    "react-hooks/rules-of-hooks": "error",
  },
};
