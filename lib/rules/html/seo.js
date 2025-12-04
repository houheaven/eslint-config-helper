
// ==========================================================
// 搜索引擎优化（SEO）
// ==========================================================

module.exports = {
  rules: {
    // 要求 <html> 标签必须有 lang 属性
    // https://yeonjuan.github.io/html-eslint/docs/rules/require-lang
    "@html-eslint/require-lang": "off",

    // 要求 <head> 标签中必须有 <title> 标签
    // https://yeonjuan.github.io/html-eslint/docs/rules/require-title
    "@html-eslint/require-title": "error",

    // 要求 <head> 标签中必须有 <meta name="description" ...>
    // https://yeonjuan.github.io/html-eslint/docs/rules/require-meta-description
    "@html-eslint/require-meta-description": "off",

    // 禁止多个 <h1> 标签
    // https://yeonjuan.github.io/html-eslint/docs/rules/no-multiple-h1
    "@html-eslint/no-multiple-h1": "off",
  },
};
