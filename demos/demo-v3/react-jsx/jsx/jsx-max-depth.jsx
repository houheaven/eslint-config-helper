
// ==========================================================
// react/jsx-max-depth 示例
// ----------------------------------------------------------
// 规则含义：限制 JSX 嵌套深度，避免出现"金字塔"式难以维护的结构。
//
// 推荐配置：["error", { max: 5 }]
// - max: 允许的最大嵌套层数。
//
// 备注：eslint-plugin-react 内部把最外层作为 0 层计数，
//   因此 max=5 时可视上会允许 6 层可见 JSX 嵌套（0..5）。
//   本示例的层数注释按可视层数写。
// ==========================================================

/* eslint-disable import/no-unresolved */
/* eslint-disable react/function-component-definition */

import React from "react";

// ---------------- 正确示例：可视 6 层嵌套（内部 depth=5）刚好允许 ----------------
function DepthOk() {
  return (
    // 可视第 1 层 (内部 depth=0)
    <div>
      {/* 可视第 2 层 (depth=1) */}
      <section>
        {/* 可视第 3 层 (depth=2) */}
        <article>
          {/* 可视第 4 层 (depth=3) */}
          <header>
            {/* 可视第 5 层 (depth=4) */}
            <h1>
              {/* 可视第 6 层 (depth=5)，等于 max，通过 */}
              <span>ok</span>
            </h1>
          </header>
        </article>
      </section>
    </div>
  );
}

// ---------------- 错误示例：可视 7 层（内部 depth=6）超出 max=5 ----------------
function DepthBad7() {
  return (
    // 1
    <div>
      {/* 2 */}
      <section>
        {/* 3 */}
        <article>
          {/* 4 */}
          <header>
            {/* 5 */}
            <h1>
              {/* 6 */}
              <span>
                {/* 7：超出 max */}
                <em>too deep</em>
              </span>
            </h1>
          </header>
        </article>
      </section>
    </div>
  );
}

// ---------------- 错误示例：可视 8 层 ----------------
function DepthBad8() {
  return (
    // 1
    <div>
      {/* 2 */}
      <section>
        {/* 3 */}
        <div>
          {/* 4 */}
          <div>
            {/* 5 */}
            <div>
              {/* 6 */}
              <div>
                {/* 7 */}
                <div>
                  {/* 8：超出 max */}
                  <span>way too deep</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export {
  DepthOk,
  DepthBad7,
  DepthBad8,
};
