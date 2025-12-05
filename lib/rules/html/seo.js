
// ==========================================================
// 搜索引擎优化（SEO）
// ==========================================================

module.exports = {
  rules: {
    // 禁止多个 <h1> 标签
    // https://html-eslint.org/docs/rules/no-multiple-h1
    "@html-eslint/no-multiple-h1": "error",

    // 强制要求 <html> 标签必须有 lang 属性
    // https://html-eslint.org/docs/rules/require-lang
    "@html-eslint/require-lang": "off",

    // 强制要求 <head> 标签中必须有 <meta name="description" ...>
    // https://html-eslint.org/docs/rules/require-meta-description
    "@html-eslint/require-meta-description": "error",

    // 强制要求使用指定的元标签以实现开放图协议
    // 默认值：["og:title", "og:type", "og:url", "og:image"]
    // https://html-eslint.org/docs/rules/require-open-graph-protocol
    "@html-eslint/require-open-graph-protocol": "off",

    // 强制要求 <head> 标签中必须有 <title> 标签
    // https://html-eslint.org/docs/rules/require-title
    "@html-eslint/require-title": "error",
  },
};
