
import hhEslintConfigHelper from "@houheaven/eslint-config-helper";

export default [
  {
    files: ["**/*.html", "**/*.htm", "**/*.php"],
    ignores: ["eslint-plugin-html/demo-es5.html", "test/html-es5.html"],
    ...hhEslintConfigHelper.supports.htmlEs6,
  },
  {
    files: [
      "eslint-plugin-html/demo-es5.html",
      "test/html-es5.html",
    ],
    ...hhEslintConfigHelper.supports.htmlEs5,
  },
  {
    files: ["test/es5.js"],
    ...hhEslintConfigHelper.supports.es5,
  },
  {
    files: ["test/es6.js", "test/spaced-comment.js"],
    ...hhEslintConfigHelper.supports.es6,
  },
  {
    rules: {
      "@html-eslint/lowercase": "off",
      // "@html-eslint/no-extra-spacing-attrs": "off",
      // "@html-eslint/require-attrs": "off",
      // "@html-eslint/no-extra-spacing-text": "off",
      // "@html-eslint/no-trailing-spaces": "off",
      // "@stylistic/no-trailing-spaces": "off",
      // "@html-eslint/no-extra-spacing-text": "off",
    },
  },
];
