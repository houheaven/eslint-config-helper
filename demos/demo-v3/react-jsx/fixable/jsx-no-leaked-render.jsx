
// ==========================================================
// react/jsx-no-leaked-render 示例
// ----------------------------------------------------------
// 规则含义：JSX 中的 `&&` 短路渲染在左值为 0 / NaN / "" 时，
// 会把这些**假值本身**渲染到界面上（尤其是 `0` 会被 React 输出成 "0"），
// 强制使用显式布尔判断或类型转换避免"渲染泄漏"。
//
// 推荐配置：["error", { validStrategies: ["ternary", "coerce"] }]
// - validStrategies:
//   - "ternary"  允许 `{cond ? <Foo/> : null}`
//   - "coerce"   允许 `{!!cond && <Foo/>}` 强制布尔化
//   - 默认包含两者；数组里出现哪种，哪种就算合法修复策略。
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */

import React from "react";

const Foo = () => <span>foo</span>;

const Demo = ({ count, name }) => (
  <div>
    {/* ---------------- 正确示例 ---------------- */}
    {/* ternary：显式给出 null 分支 */}
    {count > 0 ? <Foo /> : null}

    {/* coerce：!! 强制布尔化 */}
    {!!count && <Foo />}

    {/* 显式布尔比较也 OK（左值本身就是布尔） */}
    {name.length > 0 && <Foo />}

    {/* ---------------- 错误示例 ---------------- */}
    {/* number 类型直接 &&，count===0 时会渲染 "0" */}
    {count && <Foo />}

    {/* 字符串同理，name==="" 时会渲染空字符串（no-leaked-render 也会报） */}
    {name && <Foo />}
  </div>
);

export default Demo;
