
// ==========================================================
// 工具函数
// 用于获取规则中所有 warn 级别的规则
// ==========================================================

function getWarnRules(rules) {
  const warnRules = {};
  Object.entries(rules).forEach(([ruleName, ruleConfig]) => {
    if (typeof ruleConfig === "string" && ruleConfig === "warn") {
      warnRules[ruleName] = ruleConfig;
    }
    else if (Array.isArray(ruleConfig) && ruleConfig[0] === "warn") {
      warnRules[ruleName] = ruleConfig;
    }
  });
  return warnRules;
}

module.exports = getWarnRules;
