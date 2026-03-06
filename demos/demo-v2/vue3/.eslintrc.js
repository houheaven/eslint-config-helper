
module.exports = {
  // 防止 eslint 向上查找配置文件
  root: true,
  // 继承配置文件
  extends: [
    "@houheaven/eslint-config-helper/es6",
    "@houheaven/eslint-config-helper/import",
    "@houheaven/eslint-config-helper/vue3",
    // "@houheaven/eslint-config-helper/format-es6",
    // "@houheaven/eslint-config-helper/format-import",
    // "@houheaven/eslint-config-helper/format-vue3",
  ],
};
