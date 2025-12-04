
// ==========================================================
// 可访问性（Accessibility）
// ==========================================================

module.exports = {
  rules: {
    // 要求 img 标签必须设置 alt 属性
    // https://yeonjuan.github.io/html-eslint/docs/rules/require-img-alt
    "@html-eslint/require-img-alt": "warn",

    // 禁止 h1-h6 越级显示
    // https://yeonjuan.github.io/html-eslint/docs/rules/no-skip-heading-levels
    "@html-eslint/no-skip-heading-levels": "warn",

    // 要求 frame、iframe 标签设置 title 属性
    // https://yeonjuan.github.io/html-eslint/docs/rules/require-frame-title
    "@html-eslint/require-frame-title": "warn",

    // 禁止 <meta name="viewport"> 使用 user-scalable=no
    // https://yeonjuan.github.io/html-eslint/docs/rules/no-non-scalable-viewport
    "@html-eslint/no-non-scalable-viewport": "off",

    // 禁止 tabindex 属性值为正数
    // https://yeonjuan.github.io/html-eslint/docs/rules/no-positive-tabindex
    "@html-eslint/no-positive-tabindex": "off",

    // 要求 <head> 中必须设置 <meta name="viewport" ...>
    // https://yeonjuan.github.io/html-eslint/docs/rules/require-meta-viewport
    "@html-eslint/require-meta-viewport": "off",

    // 禁止使用抽象的 role 属性
    // https://yeonjuan.github.io/html-eslint/docs/rules/no-abstract-roles
    "@html-eslint/no-abstract-roles": "warn",

    // 禁止在 body 标签上使用 aria-hidden 属性
    // https://yeonjuan.github.io/html-eslint/docs/rules/no-aria-hidden-body
    "@html-eslint/no-aria-hidden-body": "warn",

    // 禁止使用 accesskey 属性
    // https://yeonjuan.github.io/html-eslint/docs/rules/no-accesskey-attrs
    "@html-eslint/no-accesskey-attrs": "off",
  },
};
