
// ==========================================================
// react/jsx-wrap-multilines 示例
// ----------------------------------------------------------
// 规则含义：多行 JSX 必须使用括号包裹，且括号需要单独换行，
// 避免 ASI（自动分号插入）在 `return\n<JSX/>` 场景把 return 直接
// 结束、导致组件渲染 undefined 的经典陷阱。
//
// 推荐配置：
//   ["error", {
//     declaration: "parens-new-line",  // 变量声明 (const x = <JSX/>)
//     assignment:  "parens-new-line",  // 变量重新赋值 (x = <JSX/>)
//     return:      "parens-new-line",  // return <JSX/>
//     arrow:       "parens-new-line",  // 箭头函数 () => <JSX/>
//     condition:   "parens-new-line",  // 三元运算 cond ? <JSX/> : ...
//     logical:     "parens-new-line",  // cond && <JSX/>
//     prop:        "parens-new-line",  // <Foo bar={<JSX/>} />
//   }]
// options 值可选："parens" | "parens-new-line" | "ignore" | true | false
// "parens-new-line" = 必须有括号且括号需换行
//
// 备注：本项目默认开启 arrow-body-style = as-needed，会将带 { return X; }
// 主体的箭头函数自动展平为 () => X，因此本文件在演示 return 分支时改用
// 隐式返回形式；对应 arrow 与 return 两个 sub-option 会同时命中。
// ==========================================================

/* eslint-disable import/no-unresolved */

import React from "react";

// ---------------- 正确示例：多行 JSX 用括号 + 换行包裹 ----------------
// arrow 与 return 场景：括号从新行开始
const OkReturn = () => (
  <div>
    <span>hello</span>
    <span>world</span>
  </div>
);

// declaration 场景：赋值给变量的多行 JSX 用括号包裹
const OkDeclaration = () => {
  const el = (
    <div>
      <span>declaration</span>
    </div>
  );
  return el;
};

// ---------------- 错误示例：多行 JSX 未加括号 ----------------
// arrow 场景：箭头函数隐式返回多行 JSX，没有括号包裹
const BadArrowReturn = () => <div>
  <span>bad arrow</span>
</div>;

// declaration 场景：const 声明后紧跟多行 JSX，没有括号
const BadDeclaration = () => {
  const el = <div>
    <span>bad decl</span>
  </div>;
  return el;
};

export {
  OkReturn,
  OkDeclaration,
  BadArrowReturn,
  BadDeclaration,
};
