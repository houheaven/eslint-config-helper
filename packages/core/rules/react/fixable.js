
// ==========================================================
// eslint-plugin-react - fixable
// ----------------------------------------------------------
// 支持 --fix 的规则（code / whitespace）
// ==========================================================

module.exports = {
  rules: {
    // 解构赋值风格
    // ----------------------------------------------------------
    // 官方推荐：无
    // options: [ "always" | "never", { ignoreClassFields, destructureInSignature } ]
    // 社区最佳：Airbnb / Next.js 采用 "always"（组件内 props 必须解构）
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
    "react/destructuring-assignment": ["error", "always"],

    // 函数组件定义风格（function 声明 / 箭头函数 / 命名表达式）
    // ----------------------------------------------------------
    // 官方推荐：无
    // options: { namedComponents, unnamedComponents }
    // 社区最佳：Airbnb 采用 { namedComponents: "arrow-function", unnamedComponents: "arrow-function" }
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
    "react/function-component-definition": ["error", { namedComponents: "arrow-function", unnamedComponents: "arrow-function" }],

    // 布尔属性写法：<Foo disabled /> 还是 <Foo disabled={true} />
    // ----------------------------------------------------------
    // 官方推荐：无
    // options: "never"（默认，禁止显式 ={true}）| "always"
    // 社区最佳：Airbnb / React 官方风格指南均用 "never"
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
    "react/jsx-boolean-value": ["error", "never"],

    // JSX 闭合括号位置
    // ----------------------------------------------------------
    // 官方推荐：无（stylistic 规则，v7.34+ 建议交给 formatter）
    // options: "tag-aligned" | "line-aligned" | "after-props" | "props-aligned"
    // 社区最佳：Airbnb 采用 "line-aligned"
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
    "react/jsx-closing-bracket-location": ["error", "line-aligned"],

    // JSX 闭合标签位置
    // ----------------------------------------------------------
    // 官方推荐：无（stylistic）
    // options: "tag-aligned" | "line-aligned"
    // 社区最佳：Airbnb 采用 "line-aligned"
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
    "react/jsx-closing-tag-location": ["error", "line-aligned"],

    // JSX 属性/表达式中花括号的必要性
    // ----------------------------------------------------------
    // 官方推荐：无
    // options: { props: "never" | "always", children: "never" | "always", propElementValues: "always" | "ignore" }
    // 社区最佳：Airbnb 采用 { props: "never", children: "never" }（去掉多余大括号）
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
    "react/jsx-curly-brace-presence": ["error", { props: "never", children: "never" }],

    // JSX 花括号内换行风格
    // ----------------------------------------------------------
    // 官方推荐：无（stylistic）
    // options: { multiline: "consistent" | "require" | "forbid", singleline: "consistent" | "require" | "forbid" }
    // 社区最佳：Airbnb 采用 { multiline: "consistent", singleline: "consistent" }
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-newline.md
    "react/jsx-curly-newline": ["error", { multiline: "consistent", singleline: "consistent" }],

    // JSX 花括号内空格
    // ----------------------------------------------------------
    // 官方推荐：无（stylistic）
    // options: { when: "never" | "always", allowMultiline: true }
    // 社区最佳：Airbnb 采用 { when: "never", allowMultiline: true }
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
    "react/jsx-curly-spacing": ["error", { when: "never", allowMultiline: true }],

    // JSX 等号两侧空格
    // ----------------------------------------------------------
    // 官方推荐：无（stylistic）
    // options: "never" | "always"
    // 社区最佳：Airbnb 采用 "never"（<Foo bar="baz" /> 而非 <Foo bar ="baz" />）
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
    "react/jsx-equals-spacing": ["error", "never"],

    // JSX 第一个属性是否换行
    // ----------------------------------------------------------
    // 官方推荐：无（stylistic）
    // options: "always" | "never" | "multiline" | "multiline-multiprop"
    // 社区最佳：Airbnb 采用 "multiline-multiprop"（多行且多属性才要求首属性换行）
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
    "react/jsx-first-prop-new-line": ["error", "multiline-multiprop"],

    // Fragment 语法：<> 还是 <Fragment>
    // ----------------------------------------------------------
    // 官方推荐：无
    // options: "syntax"（默认，强制 <>）| "element"（强制 <Fragment>）
    // 社区最佳：Airbnb / Next.js 采用 "syntax"
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
    "react/jsx-fragments": ["error", "syntax"],

    // JSX 缩进
    // ----------------------------------------------------------
    // 官方推荐：无（stylistic，v7.34+ 建议交给 Prettier）
    // options: 2 | 4 | "tab"
    // 社区最佳：Airbnb / React 官方 2 空格
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
    "react/jsx-indent": ["error", 2],

    // JSX 属性缩进
    // ----------------------------------------------------------
    // 官方推荐：无（stylistic）
    // options: 2 | 4 | "tab"
    // 社区最佳：Airbnb 2 空格
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
    "react/jsx-indent-props": ["error", 2],

    // 每行最多的 JSX 属性数
    // ----------------------------------------------------------
    // 官方推荐：无
    // options: { maximum: <number>, when: "always" | "multiline" }
    // 社区最佳：Airbnb 采用 { maximum: 1, when: "multiline" }（多行时每行一个属性）
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
    "react/jsx-max-props-per-line": ["error", { maximum: 1, when: "multiline" }],

    // JSX 元素之间是否需要空行
    // ----------------------------------------------------------
    // 官方推荐：无（stylistic）
    // options: { prevent: false, allowMultilines: false }
    // 社区最佳：默认关闭；开启 { prevent: true } 可禁止元素间空行
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-newline.md
    "react/jsx-newline": "off",

    // 禁止 JSX 中出现 && / ?: 短路带来的 0/NaN 渲染
    // ----------------------------------------------------------
    // 官方推荐：无（但强烈推荐启用）
    // options: { validStrategies: ["ternary", "coerce"] }
    // 社区最佳：React 官方文档明确警告这个陷阱，一律 error
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-leaked-render.md
    "react/jsx-no-leaked-render": ["error", { validStrategies: ["ternary", "coerce"] }],

    // target="_blank" 必须带 rel="noreferrer"
    // ----------------------------------------------------------
    // 官方推荐：recommended（默认 error）
    // options: { allowReferrer, enforceDynamicLinks: "always", warnOnSpreadAttributes, forms }
    // 社区最佳：保持默认 + warnOnSpreadAttributes:true（覆盖 spread 场景）
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
    "react/jsx-no-target-blank": ["error", { warnOnSpreadAttributes: true, forms: true }],

    // 禁止无意义的 Fragment
    // ----------------------------------------------------------
    // 官方推荐：无
    // options: { allowExpressions: true }
    // 社区最佳：允许 { allowExpressions: true } 以兼容 <>{list.map(...)}</>
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
    "react/jsx-no-useless-fragment": ["error", { allowExpressions: true }],

    // 每行只允许一个 JSX 表达式
    // ----------------------------------------------------------
    // 官方推荐：无（stylistic）
    // options: { allow: "none" | "literal" | "single-child" | "single-line" | "non-jsx" }
    // 社区最佳：Airbnb 采用 { allow: "single-child" }
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
    "react/jsx-one-expression-per-line": ["error", { allow: "single-child" }],

    // JSX 属性之间禁止多余空格
    // ----------------------------------------------------------
    // 官方推荐：无（stylistic）
    // 社区最佳：一律 error
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md
    "react/jsx-props-no-multi-spaces": "error",

    // JSX 属性排序
    // ----------------------------------------------------------
    // 官方推荐：无
    // options: { callbacksLast, shorthandFirst, ignoreCase, reservedFirst }
    // 社区最佳：Airbnb 采用 { callbacksLast: true, shorthandFirst: true, ignoreCase: true, reservedFirst: true }
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
    "react/jsx-sort-props": ["error", { callbacksLast: true, shorthandFirst: true, ignoreCase: true, reservedFirst: true }],

    // JSX 标签周围空格风格
    // ----------------------------------------------------------
    // 官方推荐：无（stylistic）
    // options: { closingSlash, beforeSelfClosing, afterOpening, beforeClosing }
    // 社区最佳：Airbnb 默认全部启用
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
    "react/jsx-tag-spacing": ["error", { closingSlash: "never", beforeSelfClosing: "always", afterOpening: "never", beforeClosing: "never" }],

    // 多行 JSX 是否用括号包裹
    // ----------------------------------------------------------
    // 官方推荐：无（stylistic）
    // options: { declaration, assignment, return, arrow, condition, logical, prop }
    // 社区最佳：Airbnb 采用 declaration/assignment/return/arrow=parens-new-line
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
    "react/jsx-wrap-multilines": ["error", {
      declaration: "parens-new-line",
      assignment: "parens-new-line",
      return: "parens-new-line",
      arrow: "parens-new-line",
      condition: "parens-new-line",
      logical: "parens-new-line",
      prop: "parens-new-line",
    }],

    // 禁止在生命周期方法上使用箭头函数
    // ----------------------------------------------------------
    // 官方推荐：无（性能相关）
    // 社区最佳：一律 error（避免 shouldComponentUpdate/render 每次生成新引用）
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-arrow-function-lifecycle.md
    "react/no-arrow-function-lifecycle": "error",

    // 禁止 JSX 使用未知/无效的 DOM 属性（如 class）
    // ----------------------------------------------------------
    // 官方推荐：recommended（默认 error）
    // options: { ignore, requireDataLowercase }
    // 社区最佳：保持默认；开启 requireDataLowercase:true 强制 data-* 全小写
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
    "react/no-unknown-property": ["error", { requireDataLowercase: true }],

    // 推荐 props 只读
    // ----------------------------------------------------------
    // 官方推荐：无（Flow 项目专用；纯 TS/JS 项目一般不启用）
    // 社区最佳：Flow 项目 error；TS 项目 off
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-read-only-props.md
    "react/prefer-read-only-props": "off",

    // 无子节点标签自闭合
    // ----------------------------------------------------------
    // 官方推荐：无
    // options: { component: true, html: true }
    // 社区最佳：Airbnb 默认 component/html 都启用
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
    "react/self-closing-comp": ["error", { component: true, html: true }],

    // propTypes 排序
    // ----------------------------------------------------------
    // 官方推荐：无
    // options: { callbacksLast, ignoreCase, requiredFirst, sortShapeProp, noSortAlphabetically }
    // 社区最佳：Airbnb 采用 { callbacksLast: true, ignoreCase: true, requiredFirst: true, sortShapeProp: true }
    //   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
    "react/sort-prop-types": ["error", { callbacksLast: true, ignoreCase: true, requiredFirst: true, sortShapeProp: true }],
  },
};
