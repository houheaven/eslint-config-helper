
// ==========================================================
// react/jsx-no-constructed-context-values 示例
// ----------------------------------------------------------
// 规则含义：Context.Provider 的 `value` 属性如果每次渲染都传入**新构造**
// 的对象/数组/函数，会导致所有订阅了这个 Context 的组件被强制重渲染。
// 应该用 useMemo / useCallback 缓存引用。
//
// 推荐配置：["error"]（无 options）
//
// 注意：本 demo 不演示"内联箭头函数"这一错误场景，因为它会同时触发
// react/jsx-no-bind，导致报错列表混入其他规则；箭头函数场景的正确写法
// 已在 `Good` 组件的 useCallback 分支演示。
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-parens */
/* eslint-disable object-curly-newline */

import React, { createContext, useMemo, useCallback, useState } from "react";

const Ctx = createContext(null);

function Good() {
  const [count, setCount] = useState(0);

  // ---------------- ✅ 正确示例：useMemo 缓存对象引用 ----------------
  const memoValue = useMemo(() => ({ count, setCount }), [count]);

  // ✅ 正确：useCallback 缓存函数引用
  const memoHandler = useCallback(() => setCount((c) => c + 1), []);

  return (
    <Ctx.Provider value={memoValue}>
      <button type="button" onClick={memoHandler}>ok</button>
    </Ctx.Provider>
  );
}

function Bad() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* ---------------- ❌ 错误示例：内联新对象 ---------------- */}
      <Ctx.Provider value={{ count, setCount }}>
        <span>bad-object</span>
      </Ctx.Provider>

      {/* ❌ 错误：内联新数组 */}
      <Ctx.Provider value={[count, setCount]}>
        <span>bad-array</span>
      </Ctx.Provider>
    </div>
  );
}

export default Good;
export { Bad };
