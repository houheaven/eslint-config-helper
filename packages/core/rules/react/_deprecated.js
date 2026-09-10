
// ==========================================================
// eslint-plugin-react - deprecated
// ----------------------------------------------------------
// 已弃用规则，会用 replacedBy 迁移到新规则；配置一律保持 "off"，
// 演示时在示例文件里通过 /* eslint react/xxx: "error" */ 临时启用。
// ==========================================================

module.exports = {
  rules: {
    // 排序 defaultProps
    // ----------------------------------------------------------
    // 已废弃（v7.33.0），替换为 react/sort-default-props
    // 官方推荐：无（deprecated 规则一律不进入 recommended）
    // 社区最佳：保持 "off"，改用 react/sort-default-props 或
    //          typescript-eslint 的 sort-type-constituents
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-sort-default-props.md
    "react/jsx-sort-default-props": "off",

    // JSX 闭合前空格
    // ----------------------------------------------------------
    // 已废弃（v7.4.0），替换为 react/jsx-tag-spacing
    // 官方推荐：无（deprecated 规则一律不进入 recommended）
    // 社区最佳：保持 "off"，改用 react/jsx-tag-spacing（更完整地覆盖
    //          before/after 空格控制）
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-space-before-closing.md
    "react/jsx-space-before-closing": "off",
  },
};
