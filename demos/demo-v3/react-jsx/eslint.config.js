
import hhEslintConfigHelper from "@houheaven/eslint-config-helper";

export default [
  ...hhEslintConfigHelper.configs.reactJsx,
  // 示例文件的干扰规则一律在文件头部通过 /* eslint-disable <ruleId> */ 排除，
  // config 层仅保留「无法用 inline disable 解决」的场景。
  //
  // 例外：eslint-plugin-react@7.37.5 的 react/prefer-exact-props 在
  // forbid-foreign-prop-types.jsx 里遇到 Foo.propTypes 成员表达式会 crash
  // (lib/rules/prefer-exact-props.js:150 未做 node.parent.right 判空)。
  // inline disable 只过滤 report，rule handler 仍会执行，无法规避 crash，
  // 故此处在 config 层直接关闭该规则。
  {
    files: ["prop-types/forbid-foreign-prop-types.jsx"],
    rules: {
      "react/prefer-exact-props": "off",
    },
  },
];
