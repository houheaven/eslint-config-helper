
// ==========================================================
// eslint-plugin-react - dom
// ----------------------------------------------------------
// DOM 元素 / 安全 / 常见错误
// ==========================================================

module.exports = {
  rules: {
    // <button> 必须显式指定 type
    // ----------------------------------------------------------
    // 官方推荐：无（未进入 recommended）
    // options: { button: true, submit: true, reset: true }
    //   分别控制是否允许该类型
    // 社区最佳：["error", { reset: false }]
    //   - <button type="reset"> 会清空所在 <form>，误触发风险高，Airbnb/Next.js 都禁用
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
    "react/button-has-type": ["error", { reset: false }],

    // checked 必须搭配 onChange / readOnly
    // ----------------------------------------------------------
    // 官方推荐：无
    // 社区最佳：["error"]
    //   - 只写 checked 会得到"受控组件却不受控"的运行时 warning
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/checked-requires-onchange-or-readonly.md
    "react/checked-requires-onchange-or-readonly": "error",

    // <iframe> 必须带 sandbox
    // ----------------------------------------------------------
    // 官方推荐：无（安全类规则）
    // 社区最佳：["error"]
    //   - Snyk / OWASP 都建议默认给 iframe 加 sandbox 属性
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/iframe-missing-sandbox.md
    "react/iframe-missing-sandbox": "error",

    // 禁止相邻内联元素（可能被搜索引擎/屏幕阅读器合并）
    // ----------------------------------------------------------
    // 官方推荐：无
    // 社区最佳：["warn"]
    //   - 对内联元素并列的判定较激进，Airbnb 用 warn 而非 error
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-adjacent-inline-elements.md
    "react/no-adjacent-inline-elements": "warn",

    // 禁止用数组 index 作为 key
    // ----------------------------------------------------------
    // 官方推荐：无
    // 社区最佳：["warn"]
    //   - 极少数场景（静态、只增不删且不重排的列表）用 index 是合理的
    //   - Airbnb / Next.js 都以 warn 出现
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
    "react/no-array-index-key": "warn",

    // 禁止将 children 通过 prop 传入
    // ----------------------------------------------------------
    // 官方推荐：recommended（默认 error）
    // options: { allowFunctions: false }（默认 false）
    //   - 是否允许函数式 children prop（render props 模式）
    // 社区最佳：["error", { allowFunctions: true }]（render props 是合法模式）
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
    "react/no-children-prop": ["error", { allowFunctions: true }],

    // 禁止使用 dangerouslySetInnerHTML
    // ----------------------------------------------------------
    // 官方推荐：无
    // 社区最佳：["warn"]
    //   - 有合法场景（渲染富文本），但要人工确认安全，warn 提醒即可
    //   - Airbnb / Next.js 都用 warn
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger.md
    "react/no-danger": "warn",

    // dangerouslySetInnerHTML 与 children 不能共存
    // ----------------------------------------------------------
    // 官方推荐：recommended（默认 error）
    // 社区最佳：["error"]（与 recommended 一致）
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
    "react/no-danger-with-children": "error",

    // 禁止使用已废弃的 API
    // ----------------------------------------------------------
    // 官方推荐：recommended（默认 error）
    // 社区最佳：["error"]
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
    "react/no-deprecated": "error",

    // 禁止 findDOMNode
    // ----------------------------------------------------------
    // 官方推荐：recommended（默认 error）
    // 社区最佳：["error"]（React 18 已 deprecated，React 19 移除）
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
    "react/no-find-dom-node": "error",

    // 禁止使用命名空间标签（如 <ns:tag/>）
    // ----------------------------------------------------------
    // 官方推荐：无
    // 社区最佳：["error"]
    //   - React 不支持 XML 命名空间语法，写了必然出错
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-namespace.md
    "react/no-namespace": "error",

    // 禁止把 ReactDOM.render 的返回值当组件实例使用
    // ----------------------------------------------------------
    // 官方推荐：recommended（默认 error）
    // 社区最佳：["error"]
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
    "react/no-render-return-value": "error",

    // 禁止在 render 里定义嵌套组件
    // ----------------------------------------------------------
    // 官方推荐：无
    // options: { allowAsProps: false, propNamePattern: undefined }
    //   - allowAsProps: 是否允许作为 render prop 传入
    // 社区最佳：["error", { allowAsProps: true }]（render prop 是合法模式）
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unstable-nested-components.md
    "react/no-unstable-nested-components": ["error", { allowAsProps: true }],

    // 要求使用 PureComponent / memo
    // ----------------------------------------------------------
    // 官方推荐：无
    // 社区最佳："off"
    //   - 强制所有组件用 PureComponent/memo 反而会让代码更复杂、增加内存
    //   - Airbnb / Next.js / CRA 都不启用
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-optimization.md
    "react/require-optimization": "off",

    // style 属性必须是对象
    // ----------------------------------------------------------
    // 官方推荐：无
    // options: { allow: [] }
    //   - 排除某些自定义组件（如 styled-components 里可能允许字符串）
    // 社区最佳：["error"]
    //   - React 的 style 只接受对象，写字符串是常见新手错误
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
    "react/style-prop-object": "error",

    // void 元素（如 <br/>）不允许 children
    // ----------------------------------------------------------
    // 官方推荐：无
    // 社区最佳：["error"]
    //   - <br>text</br> / <img>content</img> 都是无效 HTML
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
    "react/void-dom-elements-no-children": "error",
  },
};
