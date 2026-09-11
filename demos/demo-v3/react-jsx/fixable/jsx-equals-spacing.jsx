// ==========================================================
// react/jsx-equals-spacing 示例
// ----------------------------------------------------------
// 规则含义：控制 JSX 属性等号两侧的空格。
// 官方推荐：无（stylistic）
//
// 推荐配置：["error", "never"]
// options（第 2 参数）:
// - "never"（默认）：等号两侧不允许出现空格。如 <Foo bar="baz" />
// - "always"        ：等号两侧必须都有一个空格。如 <Foo bar = "baz" />
// ==========================================================

/* eslint-disable react/jsx-sort-props */
/* eslint-disable import/no-unresolved */

import React from "react";

const Demo = () => (
  <div>
    {/* 正确示例：等号两侧无空格 */}
    <input type="text" name="foo" />

    {/* 错误示例：等号左侧多了空格 */}
    <input type ="text" />
    {/* 错误示例：等号右侧多了空格 */}
    <input type= "text" />
    {/* 错误示例：等号两侧都多了空格 */}
    <input type = "text" />
  </div>
);

export default Demo;
