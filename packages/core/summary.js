
// 统计数据
// 使用方式：node summary.js

const allRules = require("./rules/html/accessibility.js").rules;

// 统计函数
function countRulesByLevel(rulesObj) {
  const summary = {
    off: {
      num: 0,
      rules: {},
    },
    warn: {
      num: 0,
      rules: {},
    },
    error: {
      num: 0,
      rules: {},
    },
  };

  for(const [ruleName, ruleConfig] of Object.entries(rulesObj)) {
    let level;
    
    if (typeof ruleConfig === "string") {
      level = ruleConfig;
    }
    else if (Array.isArray(ruleConfig) && ruleConfig.length > 0) {
      level = ruleConfig[0];
    }

    if (level && summary[level]) {
      summary[level].num++;
      summary[level].rules[ruleName] = ruleConfig;
    }
  }

  return summary;
}

// 执行统计
const summary = countRulesByLevel(allRules);

// 输出统计结果
console.log("规则统计结果:");
console.log(`off 级别: ${summary.off.num} 条规则`);
console.log(`warn 级别: ${summary.warn.num} 条规则`);
console.log(`error 级别: ${summary.error.num} 条规则`);

// 详细规则列表
console.log("\n详细规则列表:");
for(const level of ["off", "warn", "error"]) {
  console.log(`\n${level.toUpperCase()} 级别规则 (${summary[level].num}):`);
  console.log(Object.keys(summary[level].rules));
}
