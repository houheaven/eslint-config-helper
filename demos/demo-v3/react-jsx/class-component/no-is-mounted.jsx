
// ==========================================================
// react/no-is-mounted 示例
// ----------------------------------------------------------
// 规则含义：禁止调用 this.isMounted() —— 该 API 已被 React 官方
// 废弃（会掩盖真实的内存泄漏）。正确做法是自行维护一个 _mounted
// 布尔量，或使用可取消的订阅 / AbortController。
//
// 推荐配置：["error"]（recommended 内建启用）
//   - 官方文档：https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable react/sort-comp */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/destructuring-assignment */

import React from "react";

class Fetcher extends React.Component {
  state = { data: null };

  // 自维护挂载标记（比 this.isMounted() 可靠）
  _mounted = false;

  componentDidMount() {
    this._mounted = true;
  }

  componentWillUnmount() {
    this._mounted = false;
  }

  // ---------------- ✅ 正确示例：读自维护的 _mounted 字段 ----------------
  handleGoodPoll() {
    if (this._mounted) {
      this.setState({ data: "ok" });
    }
  }

  // ---------------- ❌ 错误示例：调用已废弃的 this.isMounted() ----------------
  handleBadPoll() {
    if (this.isMounted()) {
      this.setState({ data: "bad" });
    }
  }

  render() {
    return (
      <div>
        <span>{this.state.data}</span>
        <button type="button" onClick={() => this.handleGoodPoll()}>ok</button>
        <button type="button" onClick={() => this.handleBadPoll()}>bad</button>
      </div>
    );
  }
}

export default Fetcher;
