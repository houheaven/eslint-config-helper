
// ==========================================================
// eslint-plugin-react - suggestion (hasSuggestions)
// ----------------------------------------------------------
// 不自动 --fix，但会在编辑器里给出修复建议
// ==========================================================

module.exports = {
  rules: {
    // forwardRef 组件必须接收 ref
    // ----------------------------------------------------------
    // 官方推荐：无（未进入 recommended），本规则无 options
    // 社区最佳：一律 error（React 官方 forwardRef 文档也强调不接收 ref 的组件应改用普通函数组件）
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forward-ref-uses-ref.md
    //   - React 官方：https://react.dev/reference/react/forwardRef#my-component-is-wrapped-in-a-forwardref-but-the-ref-to-it-is-always-null
    "react/forward-ref-uses-ref": "error",

    // 强制 useState 命名遵循 [value, setValue]
    // ----------------------------------------------------------
    // 官方推荐：无（未进入 recommended）
    // options: { allowDestructuredState: false }（默认，禁止解构初值）
    // 社区最佳：多个知名脚手架（Next.js/Vite React 模板）默认关闭；enforce 命名一致性时用 error
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/hook-use-state.md
    "react/hook-use-state": ["error", { allowDestructuredState: false }],

    // 禁止使用非法的 HTML 属性（默认只校验 rel 属性）
    // ----------------------------------------------------------
    // 官方推荐：无（未进入 recommended）
    // options: 传入需要校验的属性数组，默认 ["rel"]
    // 社区最佳：默认值即最实用配置（rel 值最容易写错，如 rel="noopener noreferer" 拼写）
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-invalid-html-attribute.md
    "react/no-invalid-html-attribute": ["error", ["rel"]],

    // 禁止 JSX 中未转义的 HTML 实体（> " ' } 等）
    // ----------------------------------------------------------
    // 官方推荐：recommended（默认 error）
    // options: { forbid: [">", "\"", "'", "}"] }（默认值）
    // 社区最佳：保持默认 forbid 列表；Airbnb / Next.js / CRA 都直接沿用 recommended
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
    "react/no-unescaped-entities": ["error", { forbid: [">", "\"", "'", "}"] }],
  },
};
