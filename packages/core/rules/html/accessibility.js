
// ==========================================================
// 可访问性（Accessibility）
// ==========================================================

module.exports = {
  rules: {
    // 禁止使用抽象的 role 属性
    // https://html-eslint.org/docs/rules/no-abstract-roles
    "@html-eslint/no-abstract-roles": "error",

    // 禁止使用 accesskey 属性（为元素分配键盘快捷键）
    // https://html-eslint.org/docs/rules/no-accesskey-attrs
    "@html-eslint/no-accesskey-attrs": "error",

    // 禁止在 body 标签上使用 aria-hidden 属性
    // https://html-eslint.org/docs/rules/no-aria-hidden-body
    "@html-eslint/no-aria-hidden-body": "error",

    // 禁止在可聚焦元素上使用 aria-hidden="true"
    // https://html-eslint.org/docs/rules/no-aria-hidden-on-focusable
    "@html-eslint/no-aria-hidden-on-focusable": "error",

    // 要求所有标题元素（h1–h6）以及具有“heading”角色的元素都必须有可访问的文本内容
    // https://html-eslint.org/docs/rules/no-empty-headings
    "@html-eslint/no-empty-headings": "off",

    // 禁止在 <button> 内使用标题元素
    // https://html-eslint.org/docs/rules/no-heading-inside-button
    "@html-eslint/no-heading-inside-button": "error",

    // 禁止在元素上使用无效的 ARIA role
    // https://html-eslint.org/docs/rules/no-invalid-role
    "@html-eslint/no-invalid-role": "error",

    // 禁止 <meta name="viewport"> 使用 user-scalable=no
    // https://html-eslint.org/docs/rules/no-non-scalable-viewport
    "@html-eslint/no-non-scalable-viewport": "off",

    // 禁止 tabindex 属性值为正数
    // https://html-eslint.org/docs/rules/no-positive-tabindex
    "@html-eslint/no-positive-tabindex": "off",

    // 禁止 h1-h6 越级显示
    // https://html-eslint.org/docs/rules/no-skip-heading-levels
    "@html-eslint/no-skip-heading-levels": "error",

    // 强制要求在 <form> 元素上使用有效的 method 属性
    // https://html-eslint.org/docs/rules/require-form-method
    "@html-eslint/require-form-method": "off",

    // 要求 frame、iframe 标签设置 title 属性
    // https://html-eslint.org/docs/rules/require-frame-title
    "@html-eslint/require-frame-title": "error",

    // 要求 img 标签必须设置 alt 属性
    // https://html-eslint.org/docs/rules/require-img-alt
    "@html-eslint/require-img-alt": "error",

    // 强制要求为输入元素（如<input type="text">, <select>和<textarea>）提供无障碍标签
    // https://html-eslint.org/docs/rules/require-input-label
    "@html-eslint/require-input-label": "off",

    // 要求 <head> 中必须设置 <meta name="viewport">
    // https://html-eslint.org/docs/rules/require-meta-viewport
    "@html-eslint/require-meta-viewport": "error",
  },
};
