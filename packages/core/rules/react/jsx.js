
// ==========================================================
// eslint-plugin-react - jsx
// ----------------------------------------------------------
// JSX 语法与最佳实践类规则
// ==========================================================

module.exports = {
  rules: {
    // JSX 元素之间不允许直接相邻的行内元素
    // ----------------------------------------------------------
    // 官方推荐：无（未进入 recommended），本规则无 options
    // 社区最佳：默认关闭；Airbnb / Next.js 都未启用；对可访问性有强要求时可打开
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-child-element-spacing.md
    "react/jsx-child-element-spacing": "off",

    // JSX 只允许出现在特定扩展名的文件里（jsx / tsx）
    // ----------------------------------------------------------
    // 官方推荐：无
    // options: { extensions: [".jsx"] }（默认）
    // 社区最佳：Airbnb 采用 { extensions: [".jsx"] }；带 TS 场景多用 [".jsx", ".tsx"]
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    "react/jsx-filename-extension": ["error", { extensions: [".jsx", ".tsx"] }],

    // JSX 事件处理函数命名（onXxx / handleXxx）
    // ----------------------------------------------------------
    // 官方推荐：无
    // options: { eventHandlerPrefix: "handle", eventHandlerPropPrefix: "on" }（默认）
    // 社区最佳：默认配置最贴近约定俗成（handleClick -> onClick）
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
    "react/jsx-handler-names": ["error", { eventHandlerPrefix: "handle", eventHandlerPropPrefix: "on" }],

    // 迭代渲染必须带 key
    // ----------------------------------------------------------
    // 官方推荐：recommended（默认 error）
    // options: { checkFragmentShorthand: true, checkKeyMustBeforeSpread: true, warnOnDuplicates: true }
    // 社区最佳：把可选项全部打开可以覆盖 <>...</>、spread 前后顺序、重复 key 等场景
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
    "react/jsx-key": ["error", { checkFragmentShorthand: true, checkKeyMustBeforeSpread: true, warnOnDuplicates: true }],

    // JSX 嵌套最大深度
    // ----------------------------------------------------------
    // 官方推荐：无
    // options: { max: <number> }
    // 社区最佳：一般 4-5 层可读性最好；默认 off 是为了避免过度约束
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-max-depth.md
    "react/jsx-max-depth": ["error", { max: 5 }],

    // 禁止在 JSX 属性里使用 .bind / 箭头函数（造成每次渲染新引用）
    // ----------------------------------------------------------
    // 官方推荐：无
    // options: { allowArrowFunctions: false, allowBind: false, allowFunctions: false, ignoreRefs: true, ignoreDOMComponents: false }
    // 社区最佳：Airbnb 采用默认严格值；性能敏感场景推荐 ignoreRefs:true 减少误报
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
    "react/jsx-no-bind": ["error", { ignoreRefs: true }],

    // 禁止把注释文本节点当成 JSX 内容
    // ----------------------------------------------------------
    // 官方推荐：recommended（默认 error）
    // 社区最佳：无 options，直接沿用 recommended
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
    "react/jsx-no-comment-textnodes": "error",

    // 禁止在 Context.Provider 的 value 里传新构造的对象/数组/函数
    // ----------------------------------------------------------
    // 官方推荐：无
    // 社区最佳：React 官方性能文档推荐启用，避免 Provider 每次渲染都触发订阅者重渲染
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md
    "react/jsx-no-constructed-context-values": "error",

    // JSX 同一元素上禁止重复属性
    // ----------------------------------------------------------
    // 官方推荐：recommended（默认 error）
    // options: { ignoreCase: true }（默认忽略大小写差异）
    // 社区最佳：默认值即最佳；ignoreCase:true 避免 className/ClassName 这类漏检
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
    "react/jsx-no-duplicate-props": ["error", { ignoreCase: true }],

    // 禁止 JSX 里出现字面量文本（要求 i18n）
    // ----------------------------------------------------------
    // 官方推荐：无
    // options 众多，包含 noStrings / allowedStrings / ignoreProps 等
    // 社区最佳：i18n 强要求时启用；一般项目默认 off，误报很多
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
    "react/jsx-no-literals": "off",

    // 禁止 href="javascript:..."
    // ----------------------------------------------------------
    // 官方推荐：无（但 XSS 安全推荐启用）
    // options: [{ name: "Link", props: ["to", "href"] }], { includeFromSettings: true }
    // 社区最佳：一律 error；Airbnb / Next.js 都已启用
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md
    "react/jsx-no-script-url": "error",

    // JSX 中使用了未定义的组件
    // ----------------------------------------------------------
    // 官方推荐：recommended（默认 error）
    // options: { allowGlobals: false }
    // 社区最佳：保持默认；配 no-undef 一起用可覆盖 JSX 与非 JSX 两种场景
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
    "react/jsx-no-undef": ["error", { allowGlobals: false }],

    // 组件必须 PascalCase
    // ----------------------------------------------------------
    // 官方推荐：无
    // options: { allowAllCaps: true, allowNamespace: false, allowLeadingUnderscore: false, ignore: [] }
    // 社区最佳：Airbnb 采用 allowAllCaps:true 便于 <UI.Section /> / <SVG /> 之类
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
    "react/jsx-pascal-case": ["error", { allowAllCaps: true, allowNamespace: true }],

    // 禁止在同一个元素上使用多个 spread 属性
    // ----------------------------------------------------------
    // 官方推荐：v7.34+ 起进入 recommended（默认 error）
    // 社区最佳：直接沿用 recommended
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spread-multi.md
    "react/jsx-props-no-spread-multi": "error",

    // 禁止在 JSX 上使用 spread 属性
    // ----------------------------------------------------------
    // 官方推荐：无
    // options: { html: "enforce" | "ignore", custom: "enforce" | "ignore", exceptions: [] }
    // 社区最佳：多数团队仅对 html 元素启用（避免向 DOM 泼未知属性），自定义组件放行
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
    "react/jsx-props-no-spreading": ["error", { html: "enforce", custom: "ignore", explicitSpread: "ignore" }],

    // 使 React 变量在使用 JSX 时不被 no-unused-vars 误判
    // ----------------------------------------------------------
    // 官方推荐：recommended（默认 error），jsx-runtime 里会置为 off
    // 社区最佳：新 JSX transform（React 17+）下建议 off；老项目保持 error
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
    "react/jsx-uses-react": "error",

    // 使 JSX 中引用的变量不被 no-unused-vars 误判
    // ----------------------------------------------------------
    // 官方推荐：recommended（默认 error）
    // 社区最佳：无 options，直接沿用 recommended
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
    "react/jsx-uses-vars": "error",

    // 使用 JSX 时必须能在作用域内看到 React
    // ----------------------------------------------------------
    // 官方推荐：recommended（默认 error），jsx-runtime 里会置为 off
    // 社区最佳：新 JSX transform（React 17+）下建议 off；本项目 demo 未启用新 transform，保持 error
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
    "react/react-in-jsx-scope": "error",
  },
};
