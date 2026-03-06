
import hhEslintConfigHelper from "@houheaven/eslint-config-helper";

export default [
  ...hhEslintConfigHelper.configs.es5,
  {
    files: ["eslint.config.js"],
    ...hhEslintConfigHelper.supports.es6,
  },
];
