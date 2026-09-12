
// ==========================================================
// eslint-plugin-react-hooks - deprecated
// ----------------------------------------------------------
// 已弃用规则，全部保持 "off"；如需查看历史行为，可在示例文件里
// 通过 /* eslint react-hooks/xxx: "error" */ 临时启用。
// ==========================================================

module.exports = {
  rules: {
    // 校验"组件工厂函数"内不得再定义组件/Hook
    // ----------------------------------------------------------
    // 已废弃（v7.1.0 移除），插件内部改由 static-components 覆盖同类场景
    // 官方推荐：无（deprecated 规则一律不进入 recommended）
    // 社区最佳：保持 "off"，改用 react-hooks/static-components 替代
    //   - 官方文档：https://react.dev/reference/eslint-plugin-react-hooks/lints/static-components
    "react-hooks/component-hook-factories": "off",
  },
};
