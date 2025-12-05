
// ==========================================================
// Typescript 规则
// ==========================================================

module.exports = {
  extends: [
    "../rules/typescript/all.js",
  ].map(require.resolve),
};
