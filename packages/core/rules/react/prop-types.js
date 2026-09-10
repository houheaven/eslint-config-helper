
// ==========================================================
// eslint-plugin-react - prop-types
// ----------------------------------------------------------
// PropTypes 与组件契约相关
// ==========================================================

module.exports = {
  rules: {
    // 布尔 prop 命名（is / has 等前缀）
    // ----------------------------------------------------------
    // 官方推荐：无
    // options:
    //   - rule: string 正则，匹配"合法"的布尔 prop 名
    //   - message: string 报错时的自定义提示
    //   - propTypeNames: string[] 需要校验的 propType 名称（默认 ["bool"]）
    //   - validateNested: boolean 是否深入 shape 内部
    // 社区最佳：Airbnb 规范经常配 rule 强制 is/has/should/can 前缀
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md
    //   - Airbnb：https://github.com/airbnb/javascript/tree/master/react
    "react/boolean-prop-naming": [
      "error",
      {
        rule: "^(is|has|should|can|will|did)[A-Z]([A-Za-z0-9]?)+",
        message: "布尔 prop 建议使用 is/has/should/can/will/did 前缀",
      },
    ],

    // defaultProps 必须与 propTypes 对应
    // ----------------------------------------------------------
    // 官方推荐：无
    // options: { allowRequiredDefaults: false }（默认，禁止给 required prop 加 default）
    // 社区最佳：一律 error；React 18.3 起 defaultProps 对函数组件已弃用，规则可继续用于 class 组件
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md
    "react/default-props-match-prop-types": ["error", { allowRequiredDefaults: false }],

    // 禁止某些属性用在自定义组件上
    // ----------------------------------------------------------
    // 官方推荐：无（需要指定 forbid 列表才有意义）
    // options: { forbid: [<属性名/对象>] }
    // 社区最佳：禁止把 className / style 透传给自定义组件（破坏封装）
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
    "react/forbid-component-props": ["error", { forbid: ["className", "style"] }],

    // 禁止某些属性用在 DOM 元素上
    // ----------------------------------------------------------
    // 官方推荐：无（需要指定 forbid 列表才有意义）
    // options: { forbid: [<属性名/对象>] }
    // 社区最佳：可用于封禁危险/自研属性，此处演示 forbid: ["id"]
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-dom-props.md
    "react/forbid-dom-props": ["error", { forbid: ["id"] }],

    // 禁止使用某些元素
    // ----------------------------------------------------------
    // 官方推荐：无（需要指定 forbid 列表才有意义）
    // options: { forbid: [<元素名/对象>] }
    // 社区最佳：禁止已废弃 / 危险标签（marquee / blink 等）
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md
    "react/forbid-elements": ["error", { forbid: ["marquee", "blink", "font"] }],

    // 禁止访问其他组件的 propTypes
    // ----------------------------------------------------------
    // 官方推荐：无
    // options: { allowInPropTypes: true } —— 允许在自身 propTypes 定义中引用（默认 false）
    // 社区最佳：Airbnb 用 error 且默认关闭 allowInPropTypes
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
    "react/forbid-foreign-prop-types": ["error", { allowInPropTypes: false }],

    // 禁止使用过于宽泛的 propTypes（如 any / array / object）
    // ----------------------------------------------------------
    // 官方推荐：无
    // options: { forbid: ["any", "array", "object"] } —— Airbnb 默认值
    // 社区最佳：Airbnb 规范强制此三者
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
    //   - Airbnb：https://github.com/airbnb/javascript/tree/master/react
    "react/forbid-prop-types": ["error", { forbid: ["any", "array", "object"] }],

    // 禁止对象作为 defaultProp（会共享引用，可能引发 bug）
    // ----------------------------------------------------------
    // 官方推荐：无
    // 社区最佳：一律 error
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-object-type-as-default-prop.md
    "react/no-object-type-as-default-prop": "error",

    // 禁止声明但未使用的 propTypes
    // ----------------------------------------------------------
    // 官方推荐：无
    // 社区最佳：Airbnb / Next.js 默认 error
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
    "react/no-unused-prop-types": "error",

    // 使用 propTypes 时必须为每个 prop 声明类型
    // ----------------------------------------------------------
    // 官方推荐：recommended（默认 error）
    // 社区最佳：Airbnb / CRA / Next.js 都启用；TypeScript 项目下常可关闭以避免重复
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    "react/prop-types": "error",

    // 非必填 prop 必须有 defaultProps
    // ----------------------------------------------------------
    // 官方推荐：无
    // options:
    //   - forbidDefaultForRequired: boolean 是否禁止给 required prop 加 default
    //   - ignoreFunctionalComponents: boolean 是否忽略函数组件
    //   - classes: "defaultProps" | "ignore"（class 组件如何处理）
    //   - functions: "defaultArguments" | "defaultProps" | "ignore"
    // 社区最佳：Airbnb 用 error 并要求 forbidDefaultForRequired
    // 说明：为了在示例文件中和 default-props-match-prop-types 演示解耦，
    //       这里默认关闭 forbidDefaultForRequired，让"required + default"这种
    //       组合只触发 default-props-match-prop-types 一条报错。
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
    "react/require-default-props": ["error", { forbidDefaultForRequired: false }],

    // 更严格的 propTypes（exact-props）
    // ----------------------------------------------------------
    // 官方推荐：无
    // 社区最佳：仅在与 flow 配合时较有意义；React + PropTypes 项目下可选
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-exact-props.md
    "react/prefer-exact-props": "error",

    // defaultProps 排序
    // ----------------------------------------------------------
    // 官方推荐：无
    // 社区最佳：可选风格约束；启用时统一 error
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/sort-default-props.md
    "react/sort-default-props": "error",
  },
};
