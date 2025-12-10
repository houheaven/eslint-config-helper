
// ==========================================================
// 工具函数
// ==========================================================

// eslint 规则
const EslintRules = {
  es5: {
    ...require("../rules/eslint/layout-formatting.js").rules,
    ...require("../rules/eslint/possible-errors.js").rules,
    ...require("../rules/eslint/suggestions.js").rules,
  },
  es6: {
    ...require("../rules/eslint/es6.js").rules,
  },
  typescript: {
    ...require("../rules/typescript/deprecated.js").rules,
    ...require("../rules/typescript/conflict.js").rules,
    ...require("../rules/typescript/extension.js").rules,
    ...require("../rules/typescript/fixable.js").rules,
    ...require("../rules/typescript/type-checked.js").rules,
    ...require("../rules/typescript/suggestion.js").rules,
    ...require("../rules/typescript/other.js").rules,
    ...require("../rules/typescript/stylistic.js").rules,
  },
  import: {
    ...require("../rules/import/helpful-warnings.js").rules,
    ...require("../rules/import/module-systems.js").rules,
    ...require("../rules/import/static-analysis.js").rules,
    ...require("../rules/import/style-guide.js").rules,
  },
  html: {
    ...require("../rules/html/accessibility.js").rules,
    ...require("../rules/html/best-practice.js").rules,
    ...require("../rules/html/seo.js").rules,
    ...require("../rules/html/style.js").rules,
  },
  vue: {
    ...require("../rules/vue/common-base.js").rules,
    ...require("../rules/vue/common-essential.js").rules,
    ...require("../rules/vue/common-strongly-recommended.js").rules,
    ...require("../rules/vue/common-recommended.js").rules,
    ...require("../rules/vue/common-uncategorized.js").rules,
    ...require("../rules/vue/common-extension.js").rules,
  },
  vue2: {
    ...require("../rules/vue/vue2-essential.js").rules,
    ...require("../rules/vue/vue2-uncategorized.js").rules,
  },
  vue3: {
    ...require("../rules/vue/vue3-essential.js").rules,
    ...require("../rules/vue/vue3-strongly-recommended.js").rules,
    ...require("../rules/vue/vue3-uncategorized.js").rules,
  },
};


// 获取有效规则
function getRules(rules) {
  // 全部规则
  const AllRules = {
    // eslint 规则
    ...EslintRules.es5,
    ...EslintRules.es6,
    // typescript 规则
    ...EslintRules.typescript,
    // import 规则
    ...EslintRules.import,
    // html 规则
    ...EslintRules.html,
    // vue 规则
    ...EslintRules.vue,
    ...EslintRules.vue2,
    ...EslintRules.vue3,
  };
  const ValidRules = {};
  const InvalidRules = {};

  rules.forEach(ruleName => {
    if (AllRules[ruleName]) {
      ValidRules[ruleName] = AllRules[ruleName];
    }
    else {
      InvalidRules[ruleName] = "无效规则";
    }
  });

  // console.log("有效规则:");
  // console.log(ValidRules);
  // console.log("无效规则:");
  // console.log(InvalidRules);

  return ValidRules;
}

// 使用示例
// getRules([
//   "quotes",
//   "no-var",
//   "@html-eslint/no-trailing-spaces",
//   "@html-eslint/quotes",
// ]);


// 获取所有 warn 规则
function getWarnRules(type) {
  // 匹配规则
  let rules = {};
  switch(type) {
    case "es5":
      rules = EslintRules.es5;
      break;
    case "es6":
      rules = {
        ...EslintRules.es5,
        ...EslintRules.es6,
      };
      break;
    case "typescript":
      rules = EslintRules.typescript;
      break;
    case "import":
      rules = EslintRules.import;
      break;
    case "html":
      rules = EslintRules.html;
      break;
    case "vue2":
      rules = {
        ...EslintRules.vue,
        ...EslintRules.vue2,
      };
      break;
    case "vue3":
      rules = {
        ...EslintRules.vue,
        ...EslintRules.vue3,
      };
      break;
  }

  // 筛选规则
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


module.exports = {
  rules: EslintRules,
  getRules,
  getWarnRules,
};
