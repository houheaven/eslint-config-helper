
// ==========================================================
// eslint-plugin-react - class-component
// ----------------------------------------------------------
// class 组件 / 生命周期 / this 语义相关
// ==========================================================

module.exports = {
  rules: {
    // 禁止在 setState 里直接引用 this.state（会导致基于旧值的并发问题）
    // ----------------------------------------------------------
    // 官方推荐：无（未进入 recommended）
    // 社区最佳：Airbnb / Next.js 均设为 error（此规则强烈推荐，React 官方也建议改用函数形式 setState(prev => ...)）
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
    "react/no-access-state-in-setstate": "error",

    // 禁止在 componentDidMount 内 setState（触发额外一次 render，影响性能）
    // ----------------------------------------------------------
    // 官方推荐：无
    // options: "disallow-in-func"（同时禁止 mount 里的回调函数中 setState）
    // 社区最佳：多数场景使用默认值即可；严格团队用 "disallow-in-func"
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
    "react/no-did-mount-set-state": "error",

    // 禁止在 componentDidUpdate 内 setState（无条件调用会形成死循环）
    // ----------------------------------------------------------
    // 官方推荐：无
    // options: "disallow-in-func"
    // 社区最佳：默认即可（无条件的 setState 才会死循环，带条件的合理场景也被拦是常见抱怨）
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
    "react/no-did-update-set-state": "error",

    // 禁止在 componentWillUpdate 内 setState（该生命周期已被 UNSAFE_）
    // ----------------------------------------------------------
    // 官方推荐：无
    // options: "disallow-in-func"
    // 社区最佳：默认即可
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
    "react/no-will-update-set-state": "error",

    // 禁止使用 setState（面向"纯函数组件 + hooks"的极端严格模式）
    // ----------------------------------------------------------
    // 官方推荐：无
    // 社区最佳：默认关闭；老项目 / 混合项目会导致大量误报
    "react/no-set-state": "off",

    // 禁止直接修改 this.state（会导致 UI 与 state 不一致，绕过 setState）
    // ----------------------------------------------------------
    // 官方推荐：recommended（默认 error）
    // 社区最佳：所有主流 config 都直接沿用
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
    "react/no-direct-mutation-state": "error",

    // 禁止调用 this.isMounted()（该 API 已废弃）
    // ----------------------------------------------------------
    // 官方推荐：recommended（默认 error）
    "react/no-is-mounted": "error",

    // 单文件禁止定义多个组件
    // ----------------------------------------------------------
    // 官方推荐：无
    // options: { ignoreStateless: false }（默认，函数组件也算）
    // 社区最佳：{ ignoreStateless: true } —— 允许把小型函数组件写在同一文件（Airbnb 采用）
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
    "react/no-multi-comp": ["error", { ignoreStateless: true }],

    // 禁止冗余的 shouldComponentUpdate（继承自 PureComponent 时再手写就是冗余）
    // ----------------------------------------------------------
    // 官方推荐：无
    // 社区最佳：error（Airbnb 采用）
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md
    "react/no-redundant-should-component-update": "error",

    // 禁止字符串 ref（React 17+ 已完全废弃）
    // ----------------------------------------------------------
    // 官方推荐：recommended（默认 error）
    // options: { noTemplateLiterals: true }（额外禁止模板字符串 ref）
    // 社区最佳：{ noTemplateLiterals: true }（拦得更严）
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
    "react/no-string-refs": ["error", { noTemplateLiterals: true }],

    // 禁止在函数组件中使用 this（this 在函数组件里通常是 undefined 或全局对象）
    // ----------------------------------------------------------
    // 官方推荐：无
    // 社区最佳：error（Airbnb / TypeScript 严格模板均采用）
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md
    "react/no-this-in-sfc": "error",

    // 生命周期名 / propTypes 名拼写错误检测
    // ----------------------------------------------------------
    // 官方推荐：无
    // 社区最佳：error（成本极低，能拦下 componenetDidMount 这种致命拼错）
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-typos.md
    "react/no-typos": "error",

    // 禁止使用不安全的生命周期（componentWillMount / WillReceiveProps / WillUpdate）
    // ----------------------------------------------------------
    // 官方推荐：recommended（默认 error）
    // options: { checkAliases: true }（连 UNSAFE_ 前缀别名也一起检查）
    // 社区最佳：使用默认即可；严格团队加 { checkAliases: true }
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unsafe.md
    "react/no-unsafe": "error",

    // 禁止 class 组件里存在未使用的方法
    // ----------------------------------------------------------
    // 官方推荐：无
    // options: { ignore: ["someLifecycle"] }（忽略指定方法）
    // 社区最佳：error（对代码质量提升明显）
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-class-component-methods.md
    "react/no-unused-class-component-methods": "error",

    // 禁止未使用的 state
    // ----------------------------------------------------------
    // 官方推荐：无
    // 社区最佳：error（能揭示"忘记消费的 state 字段"）
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md
    "react/no-unused-state": "error",

    // 优先使用 ES6 class 而不是 createReactClass
    // ----------------------------------------------------------
    // 官方推荐：无
    // 社区最佳：error（React 官方已把 createReactClass 抽为独立包，视为遗留 API）
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
    "react/prefer-es6-class": ["error", "always"],

    // 无 state / 生命周期时优先使用函数组件
    // ----------------------------------------------------------
    // 官方推荐：无
    // options: { ignorePureComponents: true }（PureComponent 不强制）
    // 社区最佳：error
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
    "react/prefer-stateless-function": ["error", { ignorePureComponents: true }],

    // render 必须显式 return
    // ----------------------------------------------------------
    // 官方推荐：recommended（默认 error）
    "react/require-render-return": "error",

    // 生命周期与方法排序
    // ----------------------------------------------------------
    // 官方推荐：无
    // options: { order: ["static-methods", "lifecycle", "everything-else", "render"] }（默认）
    // 社区最佳：error
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
    "react/sort-comp": "error",

    // state 必须在 constructor 中初始化 / 或字段初始化
    // ----------------------------------------------------------
    // 官方推荐：无
    // options: "always"（默认，只能在 constructor 里初始化）| "never"（只能用 class field）
    // 社区最佳："never"（React 官方文档和 Airbnb 都倾向 class field 语法）
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md
    "react/state-in-constructor": ["error", "never"],

    // 静态属性放置方式（static 字段 / 类外赋值）
    // ----------------------------------------------------------
    // 官方推荐：无
    // options: "static public field"（默认，推荐）| "property assignment"
    // 社区最佳：static public field
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md
    "react/static-property-placement": ["error", "static public field"],

    // 组件必须有 displayName（否则 DevTools 显示为 Anonymous）
    // ----------------------------------------------------------
    // 官方推荐：recommended（默认 error）
    // options: { ignoreTranspilerName: false }（默认）
    // 社区最佳：默认即可
    "react/display-name": "error",
  },
};
