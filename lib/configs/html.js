
// ==========================================================
// @html-eslint
// ----------------------------------------------------------
// - seo.js
// - style.js
// - accessibility.js
// - best-practice.js
// ==========================================================

module.exports = {
  parser: "@html-eslint/parser",
  plugins: ["@html-eslint"],
  extends: [
    "../rules/html/seo.js",
    "../rules/html/style.js",
    "../rules/html/accessibility.js",
    "../rules/html/best-practice.js",
  ],
};
