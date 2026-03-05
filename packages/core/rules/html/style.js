
// ==========================================================
// 样式（Style）
// ==========================================================

module.exports = {
  rules: {
    // 元素属性数量超过指定数量时，强制在属性之间添加换行符
    // https://html-eslint.org/docs/rules/attrs-newline
    "@html-eslint/attrs-newline": ["warn", {
      ifAttrsMoreThan: 6,
      closeStyle: "newline",
    }],

    // 要求标签之间使用换行
    // https://html-eslint.org/docs/rules/element-newline
    "@html-eslint/element-newline": ["warn", {
      skip: ["pre", "code", "tr", "label", "h1"],
      // 行内元素可以不用换行
      inline: ["$inline"],
    }],

    // 强制 id 属性命名规范
    // 取值：camelCase、snake_case、PascalCase、kebab-case
    // https://html-eslint.org/docs/rules/id-naming-convention
    "@html-eslint/id-naming-convention": ["error", "kebab-case"],

    // 强制使用一致的缩进
    // https://html-eslint.org/docs/rules/indent
    "@html-eslint/indent": ["warn", 2, {
      Attribute: 1,
      tagChildrenIndent: {
        html: 0,
      },
    }],

    // 强制标签和属性名称使用小写
    // https://html-eslint.org/docs/rules/lowercase
    "@html-eslint/lowercase": "warn",

    // 禁止标签属性周围出现多余的空格
    // https://html-eslint.org/docs/rules/no-extra-spacing-attrs
    "@html-eslint/no-extra-spacing-attrs": ["warn", {
      enforceBeforeSelfClose: true,
      disallowMissing: true,
      disallowTabs: true,
      disallowInAssignment: true,
    }],

    // 禁止文本和注释中有多个连续的空格或 tab
    // https://html-eslint.org/docs/rules/no-extra-spacing-text
    "@html-eslint/no-extra-spacing-text": ["warn", {
      skip: ["pre"],
    }],

    // 禁止出现多个空行
    // https://html-eslint.org/docs/rules/no-multiple-empty-lines
    "@html-eslint/no-multiple-empty-lines": ["warn", { max: 2 }],

    // 禁止出现行末空格
    // https://html-eslint.org/docs/rules/no-trailing-spaces
    "@html-eslint/no-trailing-spaces": "warn",

    // 强制使用一致的引号
    // https://html-eslint.org/docs/rules/quotes
    "@html-eslint/quotes": ["warn", "double", {
      enforceTemplatedAttrValue: true,
    }],
  },
};
