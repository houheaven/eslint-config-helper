
// ==========================================================
// 最佳实践（Best Practice）
// ==========================================================

module.exports = {
  rules: {
    // 要求设置 <!DOCTYPE html> 文档申明
    // https://yeonjuan.github.io/html-eslint/docs/rules/require-doctype
    "@html-eslint/require-doctype": "warn",

    // 禁止 id 属性重复
    // https://yeonjuan.github.io/html-eslint/docs/rules/no-duplicate-id
    "@html-eslint/no-duplicate-id": "error",

    // 禁止使用行内样式
    // https://yeonjuan.github.io/html-eslint/docs/rules/no-inline-styles
    "@html-eslint/no-inline-styles": "warn",

    // 强制 <li> 必须包裹在 <ul>、<ol>、<menu> 中
    // https://yeonjuan.github.io/html-eslint/docs/rules/require-li-container
    "@html-eslint/require-li-container": "warn",

    // 禁止在 HTML5 中使用过时的标签
    // https://yeonjuan.github.io/html-eslint/docs/rules/no-obsolete-tags
    "@html-eslint/no-obsolete-tags": "warn",

    // 要求标签闭合
    // https://yeonjuan.github.io/html-eslint/docs/rules/require-closing-tags
    "@html-eslint/require-closing-tags": ["warn", { selfClosing: "always" }],

    // 强制在 <head> 中使用 <meta charset="..."> 文件编码
    // https://yeonjuan.github.io/html-eslint/docs/rules/require-meta-charset
    "@html-eslint/require-meta-charset": "warn",

    // 禁止使用不安全的 target='_blank' 属性
    // https://yeonjuan.github.io/html-eslint/docs/rules/no-target-blank
    "@html-eslint/no-target-blank": "off",

    // 禁止使用重复的属性
    // https://yeonjuan.github.io/html-eslint/docs/rules/no-duplicate-attrs
    "@html-eslint/no-duplicate-attrs": "error",

    // 要求 button 标签设置一个有效的 type 属性
    // https://yeonjuan.github.io/html-eslint/docs/rules/require-button-type
    "@html-eslint/require-button-type": "off",

    // 禁用特定的属性
    // https://yeonjuan.github.io/html-eslint/docs/rules/no-restricted-attrs
    "@html-eslint/no-restricted-attrs": [
      "off",
      {
        tagPatterns: ["^div$", "^img$"],
        attrPatterns: ["data-.*"],
        message: "'data-x' is restricted.",
      },
      {
        tagPatterns: ["^img$"],
        attrPatterns: ["^alt$"],
        message: "'alt' is restricted.",
      },
    ],
  },
};
