
// ==========================================================
// 样式（Style）
// ==========================================================

module.exports = {
  rules: {
    // 禁止标签属性周围出现多余的空格
    // https://yeonjuan.github.io/html-eslint/docs/rules/no-extra-spacing-attrs
    "@html-eslint/no-extra-spacing-attrs": "off",

    // 要求标签之间使用换行
    // https://yeonjuan.github.io/html-eslint/docs/rules/element-newline
    "@html-eslint/element-newline": "off",

    // 要求使用一致的缩进
    // https://yeonjuan.github.io/html-eslint/docs/rules/indent
    "@html-eslint/indent": ["off", 2],

    // 强制使用一致的引号
    // https://yeonjuan.github.io/html-eslint/docs/rules/quotes
    "@html-eslint/quotes": ["warn", "double"],

    // 强制 id 属性命名规范
    // https://yeonjuan.github.io/html-eslint/docs/rules/id-naming-convention
    "@html-eslint/id-naming-convention": ["warn", "kebab-case"],

    // 禁止出现多个空行
    // https://yeonjuan.github.io/html-eslint/docs/rules/no-multiple-empty-lines
    "@html-eslint/no-multiple-empty-lines": ["warn", { max: 2 }],
  },
};
