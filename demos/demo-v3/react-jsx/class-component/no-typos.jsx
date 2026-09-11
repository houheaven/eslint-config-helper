
// ==========================================================
// react/no-typos 示例
// ----------------------------------------------------------
// 规则含义：检测 React 生命周期 / 静态属性名的**大小写拼写**错误。
// 注意：该规则**只**校验 case（大小写），并不会识别"多字符/少字符"
// 的错别字（因为源码里是 case-insensitive 匹配预置生命周期名）。
//
// 推荐配置：["error"]
// - 无 options
// - 能拦下 `ComponentDidMount`（大驼峰化）/ `componentwillunmount`
//   （全小写）这类误写；以及应为 static 的方法忘记 static 关键字。
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable react/sort-comp */

import React from "react";

class Demo extends React.Component {
  // ---------------- ❌ 错误示例：大小写拼错 ----------------
  // ❌ 大写开头：应为 componentDidMount
  ComponentDidMount() {
    return null;
  }

  // ❌ 全小写：应为 componentWillUnmount
  componentwillunmount() {
    return null;
  }

  // ❌ 应为 static getDerivedStateFromProps（此处漏了 static 关键字）
  getDerivedStateFromProps(props) {
    return props;
  }

  // ---------------- ✅ 正确示例 ----------------
  componentDidMount() {
    return null;
  }

  render() {
    // 消费所有方法，避免 react/no-unused-class-component-methods 干扰
    this.ComponentDidMount();
    this.componentwillunmount();
    this.getDerivedStateFromProps({});
    this.componentDidMount();
    return <div />;
  }
}

export default Demo;
