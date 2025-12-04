
// ==========================================================
// JS 文件代码格式化
// ==========================================================

module.exports = {
  rules: {
    // Best Practices - 最佳实践
    // "eqeqeq": ["error", "always", { null: "ignore" }],

    // ES6
    "arrow-parens": ["warn", "as-needed"],
    "arrow-spacing": ["warn", {
      before: true,
      after: true,
    }],
    "arrow-body-style": ["error", "as-needed", {
      requireReturnForObjectLiteral: false,
    }],
    "prefer-template": "warn",
    "template-curly-spacing": "warn",

    // Stylistic Issues
    "quotes": ["warn", "double", { "avoidEscape": true }],
    "linebreak-style": ["warn", "unix"],
    "comma-spacing": ["warn", {
      before: false,
      after: true,
    }],
    "comma-dangle": ["warn", {
      arrays: "always-multiline",
      objects: "always-multiline",
      imports: "always-multiline",
      exports: "always-multiline",
      functions: "never",
    }],
    "keyword-spacing": ["warn", {
      "before": true,
      "after": true,
      "overrides": {
        "if": { "after": true },
        "for": { "after": false },
        "while": { "after": false },
        "switch": { "after": false },
        "case": { "after": true },
        "catch": { "after": false },
        "return": { "after": true },
        "throw": { "after": true },
      },
    }],
    "object-curly-spacing": ["warn", "always", {
      arraysInObjects: true,
      objectsInObjects: true,
    }],
    "object-curly-newline": ["warn", {
      ObjectExpression: { minProperties: 40, multiline: true, consistent: true },
      ObjectPattern: "never",
      ImportDeclaration: "never",
      ExportDeclaration: "always",
    }],
    "array-bracket-spacing": ["warn", "never"],
    "space-in-parens": ["warn", "never"],
    "space-infix-ops": "warn",
    "semi-spacing": ["error", { before: false, after: true }],
    "space-before-blocks": ["warn", {
      "functions": "always",
      "keywords": "always",
      "classes": "always",
    }],
    "brace-style": ["warn", "stroustrup", { "allowSingleLine": true }],


    // 文件首尾空行

    // 要求或禁止文件末尾存在空行
    "eol-last": ["warn", "always"],

    // 禁止出现多行空行
    "no-multiple-empty-lines": ["warn", {
      "max": 2,
      "maxBOF": 1,
      "maxEOF": 1,
    }],

    // 禁用行尾空白
    "no-trailing-spaces": ["warn", {
      "skipBlankLines": true,
      "ignoreComments": false,
    }],

    // 强制使用一致的缩进
    "indent": ["error", 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      // MemberExpression: null,
      FunctionDeclaration: {
        parameters: 1,
        body: 1,
      },
      FunctionExpression: {
        parameters: 1,
        body: 1,
      },
      CallExpression: {
        arguments: 1,
      },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
      ignoredNodes: [
        "JSXElement",
        "JSXElement > *",
        "JSXAttribute",
        "JSXIdentifier",
        "JSXNamespacedName",
        "JSXMemberExpression",
        "JSXSpreadAttribute",
        "JSXExpressionContainer",
        "JSXOpeningElement",
        "JSXClosingElement",
        "JSXFragment",
        "JSXOpeningFragment",
        "JSXClosingFragment",
        "JSXText",
        "JSXEmptyExpression",
        "JSXSpreadChild",
      ],
      ignoreComments: false,
    }],
  },
};
