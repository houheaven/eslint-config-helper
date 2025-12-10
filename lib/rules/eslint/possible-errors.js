
// ==========================================================
// Possible Errors
// 这些规则与 JavaScript 代码中可能的错误或逻辑错误有关
// ==========================================================

module.exports = {
  rules: {
    // 防止死循环，执行“for”循环更新子句，使计数器朝着正确的方向移动
    "for-direction": "error",

    // 禁止与-0进行比较
    // 这条规则应该对试图与 -0 比较的代码提出警告，因为这不会像预期的那样工作。也就是说，像 x === -0 这样的代码对于 +0 和 -0 都会通过。作者可能想要的是 Object.is(x, -0)。
    "no-compare-neg-zero": "error",

    // 禁止在条件表达式中使用赋值运算符
    // 在条件语句中，很容易把比较运算符（如 ==）误打成赋值运算符（如 =）
    // 使用此规则禁用 if、for、while 和 do...while 测试条件中的模糊赋值运算符
    "no-cond-assign": ["error", "always"],

    // Disallow expressions where the operation doesn't affect the value
    // https://zh-hans.eslint.org/docs/latest/rules/no-constant-binary-expression
    "no-constant-binary-expression": "error",

    // 禁止条件中的常量表达式
    // 这条规则不允许在以下测试条件中使用常量表达式：
    // - if、for、while 或 do...while 语句
    // - ?: 三元表达式
    // https://zh-hans.eslint.org/docs/latest/rules/no-constant-condition
    "no-constant-condition": ["error", {
      // 默认为 true。将此选项设置为 false 允许在循环中使用常量表达式。
      checkLoops: true,
    }],

    // 禁止在正则表达式中使用控制字符
    // 控制字符是 ASCII 范围内 0-31 的特殊、不可见的字符。这些字符在 JavaScript 字符串中很少使用，所以一个包含明确匹配这些字符的元素的正则表达式很可能是一个错误。
    // 这条规则不允许使用控制字符和一些转义序列与正则表达式中的控制字符匹配。
    "no-control-regex": "error",

    // 禁用 debugger
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",

    // 禁止函数参数名称重复
    // https://zh-hans.eslint.org/docs/latest/rules/no-dupe-args
    "no-dupe-args": "error",

    // 禁止在 if-else-if 中存在重复条件
    // 这条规则不允许在同一个 if-else-if 链中出现重复的条件。
    "no-dupe-else-if": "error",

    // 禁止对象字面中的键名重复
    "no-dupe-keys": "error",

    // 禁止在 switch 的 case 子句中重复测试表达式
    "no-duplicate-case": "error",

    // 禁止在正则表达式中使用空字符类
    // https://zh-hans.eslint.org/docs/latest/rules/no-empty-character-class
    "no-empty-character-class": "error",

    // disallow assigning to the exception in a catch block
    // https://zh-hans.eslint.org/docs/latest/rules/no-ex-assign
    "no-ex-assign": "error",

    // 禁止条件语句中的“穿透”行为
    // case 语句中需要有 break，防止穿透到下一个 case 语句
    // https://zh-hans.eslint.org/docs/latest/rules/no-fallthrough
    "no-fallthrough": ["error", {
      commentPattern: "",
      allowEmptyCase: true,
    }],

    // 禁止对函数赋值
    // 这条规则不允许重新分配 function 的声明
    // https://zh-hans.eslint.org/docs/latest/rules/no-func-assign
    "no-func-assign": "error",

    // 禁止在嵌套块中声明变量或函数
    // https://zh-hans.eslint.org/docs/latest/rules/no-inner-declarations
    "no-inner-declarations": ["error", "functions"],

    // 禁止在 RegExp 构造函数中使用无效的正则表达式字符串
    "no-invalid-regexp": "error",

    // 禁止不规则的空格
    // https://zh-hans.eslint.org/docs/latest/rules/no-irregular-whitespace
    "no-irregular-whitespace": ["error", {
      skipStrings: false,
      skipComments: false,
      skipRegExps: false,
      skipTemplates: false,
    }],

    // 禁止失去精度的文字数字
    // https://zh-hans.eslint.org/docs/latest/rules/no-loss-of-precision
    "no-loss-of-precision": "error",

    // Disallow characters which are made with multiple code points in character class syntax
    // https://zh-hans.eslint.org/docs/latest/rules/no-misleading-character-class
    "no-misleading-character-class": "error",

    // 这条规则不允许将 Math、JSON、Reflect、Atomics 和 Intl 对象作为函数调用
    // https://zh-hans.eslint.org/docs/latest/rules/no-obj-calls
    "no-obj-calls": "error",

    // 不允许直接在对象上调用某些 Object.prototype 方法
    // https://zh-hans.eslint.org/docs/latest/rules/no-prototype-builtins
    "no-prototype-builtins": "error",

    // 禁止将变量赋值给它自己
    // https://zh-hans.eslint.org/docs/latest/rules/no-self-assign
    "no-self-assign": ["error", {
      props: true,
    }],

    // 禁止将变量与自身进行比较
    // https://zh-hans.eslint.org/docs/latest/rules/no-self-compare
    "no-self-compare": "error",

    // 禁止使用稀疏数组
    // 稀疏数组包含空槽，最常见的原因是在数组字面中使用了多个逗号（比如：[,,]）
    // https://zh-hans.eslint.org/docs/latest/rules/no-sparse-arrays
    "no-sparse-arrays": "error",

    // 禁止未定义的变量
    "no-undef": ["error", {
      typeof: true,
    }],

    // 禁止出现令人困惑的多行表达式
    // 这条规则不允许出现混乱的多行表达式，即换行看起来像是在结束一个语句，但实际上不是。
    // https://zh-hans.eslint.org/docs/latest/rules/no-unexpected-multiline
    "no-unexpected-multiline": "error",

    // 不允许未修改的循环条件
    // 经常会循环中修改循环条件中的变量。 如果没有，那可能是个错误。
    // 这条规则会找到位于循环条件内的引用，然后检查是否有在循环中修改这些引用的变量。
    "no-unmodified-loop-condition": "error",

    // 不允许在 return、throw、continue、break 语句后出现无法访问的代码
    // https://zh-hans.eslint.org/docs/latest/rules/no-unreachable
    "no-unreachable": "error",

    // 禁止只允许一次迭代的循环体
    // https://zh-hans.eslint.org/docs/latest/rules/no-unreachable-loop
    "no-unreachable-loop": ["error", {
      ignore: [], // WhileStatement, DoWhileStatement, ForStatement, ForInStatement, ForOfStatement
    }],

    // 禁止在finally块中使用控制流语句
    // https://zh-hans.eslint.org/docs/latest/rules/no-unsafe-finally
    "no-unsafe-finally": "error",

    // 禁止对关系操作符的左操作数取反
    // https://zh-hans.eslint.org/docs/latest/rules/no-unsafe-negation
    "no-unsafe-negation": ["error", {
      enforceForOrderingRelations: false,
    }],

    // 禁止定义变量后不使用
    // https://zh-hans.eslint.org/docs/latest/rules/no-unused-vars
    "no-unused-vars": ["error", {
      vars: "all",
      varsIgnorePattern: "",
      args: "after-used",                                                 // 参数相关
      argsIgnorePattern: "^_|^(evt|err)\\d*$|^(resolve|reject)$",         // 指定了不检查使用情况的例外情况：参数的名称与 regexp 模式相匹配。例如，名称以下划线开头的变量。
      caughtErrors: "none",
      caughtErrorsIgnorePattern: "^_|^(e|err|error)\\d*$",                // try-catch 代码块
      destructuredArrayIgnorePattern: "",                                 // 数组解构相关
      ignoreRestSiblings: true,
    }],

    // 禁止定义前使用
    // https://zh-hans.eslint.org/docs/latest/rules/no-use-before-define
    "no-use-before-define": ["error", {
      functions: false,
      classes: true,
      variables: true,
      allowNamedExports: false,
    }],

    // Disallow useless backreferences in regular expressions
    // https://zh-hans.eslint.org/docs/latest/rules/no-useless-backreference
    "no-useless-backreference": "error",

    // 要求使用 isNaN() 检测 NaN
    "use-isnan": ["error", {
      enforceForSwitchCase: true,   // 不允许在 switch 语句中使用 case NaN 和 switch(NaN)
      enforceForIndexOf: true,      // 不允许使用 indexOf(NaN) 或 lastIndexOf(NaN)
    }],

    // 这条规则强制将 typeof 表达式与有效的字符串字面量进行比较。
    // 有效的字符串字面量："undefined", "object", "boolean", "number", "string", "function", "symbol", and "bigint"
    // https://zh-hans.eslint.org/docs/latest/rules/valid-typeof
    "valid-typeof": ["error", {
      requireStringLiterals: true,
    }],
  },
};
