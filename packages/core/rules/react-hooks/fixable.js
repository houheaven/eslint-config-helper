
// ==========================================================
// eslint-plugin-react-hooks - fixable
// ----------------------------------------------------------
// 支持 --fix 或提供 code action 建议的规则，一律 "warn"：
// 编辑器/CI 一跑 --fix 就能自动纠正，不必阻断开发。
// ==========================================================

module.exports = {
  rules: {
    // useEffect / useMemo / useCallback 等 Hook 依赖项穷尽性校验
    // ----------------------------------------------------------
    // 官方推荐：recommended（默认 warn）
    // options: { additionalHooks?: string, enableDangerousAutofixThisMayCauseInfiniteLoops?: boolean,
    //            experimental_autoDependenciesHooks?: string[], requireExplicitEffectDeps?: boolean }
    // 社区最佳：保持 recommended 默认；如有自定义 hook 如 useDeepCompareEffect，可通过 additionalHooks 正则接入
    //   - 官方文档：https://github.com/facebook/react/issues/14920
    "react-hooks/exhaustive-deps": "warn",

    // Validates the rules of hooks（新版可自动修复的 Rules of Hooks 检查器）
    // ----------------------------------------------------------
    // 官方推荐：无（recommended-latest 未启用，rules-of-hooks 仍是主入口）
    // options: 无
    // 社区最佳：可与 rules-of-hooks 并存作为渐进式迁移开关；正式项目通常保持默认关闭
    //   - 官方文档：https://react.dev/reference/eslint-plugin-react-hooks/lints/hooks
    "react-hooks/hooks": "off",

    // 禁止把首字母大写的函数当作普通函数调用（应写为 JSX）
    // ----------------------------------------------------------
    // 官方推荐：无
    // options: 无
    // 社区最佳：React Compiler 场景推荐启用，避免误把组件当普通函数
    //   - 官方文档：https://react.dev/reference/eslint-plugin-react-hooks/lints/capitalized-calls
    "react-hooks/capitalized-calls": "warn",

    // 组件必须是静态定义，禁止在渲染过程中动态创建
    // ----------------------------------------------------------
    // 官方推荐：recommended（默认 error）
    // options: 无
    // 社区最佳：一律启用，避免 state 被意外重置或引发过量 re-render
    //   - 官方文档：https://react.dev/reference/eslint-plugin-react-hooks/lints/static-components
    "react-hooks/static-components": "warn",

    // useMemo 常见误用检查（如缺失依赖、错误 return）
    // ----------------------------------------------------------
    // 官方推荐：recommended（默认 error）
    // options: 无
    // 社区最佳：保持启用
    //   - 官方文档：https://react.dev/reference/eslint-plugin-react-hooks/lints/use-memo
    "react-hooks/use-memo": "warn",

    // useMemo 必须返回值且返回值必须被使用
    // ----------------------------------------------------------
    // 官方推荐：无（recommended-latest 启用为 error）
    // options: 无
    // 社区最佳：新项目直接启用，避免退化为副作用函数
    //   - 官方文档：https://react.dev/reference/eslint-plugin-react-hooks/lints/void-use-memo
    "react-hooks/void-use-memo": "warn",

    // React Compiler 场景下保留手工 memo（useMemo / useCallback / React.memo）
    // ----------------------------------------------------------
    // 官方推荐：recommended（默认 error）
    // options: 无
    // 社区最佳：接入 React Compiler 时必开
    //   - 官方文档：https://react.dev/reference/eslint-plugin-react-hooks/lints/preserve-manual-memoization
    "react-hooks/preserve-manual-memoization": "warn",

    // useMemo / useCallback 的依赖项穷尽性 & 冗余校验
    // ----------------------------------------------------------
    // 官方推荐：无（未进入 recommended）
    // options: 无
    // 社区最佳：与 exhaustive-deps 覆盖面重叠，通常挑选一个即可
    //   - 官方文档：https://react.dev/reference/eslint-plugin-react-hooks/lints/memo-dependencies
    "react-hooks/memo-dependencies": "off",

    // 阻止使用与 memoization 不兼容的第三方库 API
    // ----------------------------------------------------------
    // 官方推荐：recommended（默认 warn）
    // options: 无
    // 社区最佳：保持默认 warn，让开发者感知不兼容 API
    //   - 官方文档：https://react.dev/reference/eslint-plugin-react-hooks/lints/incompatible-library
    "react-hooks/incompatible-library": "warn",

    // 禁止修改 props / state 等不可变值
    // ----------------------------------------------------------
    // 官方推荐：recommended（默认 error）
    // options: 无
    // 社区最佳：一律启用；React 官方明确 props/state 不可变
    //   - 官方文档：https://react.dev/reference/eslint-plugin-react-hooks/lints/immutability
    "react-hooks/immutability": "warn",

    // 禁止在 render 期间写全局变量
    // ----------------------------------------------------------
    // 官方推荐：recommended（默认 error）
    // options: 无
    // 社区最佳：一律启用；render 必须无副作用
    //   - 官方文档：https://react.dev/reference/eslint-plugin-react-hooks/lints/globals
    "react-hooks/globals": "warn",

    // 禁止在 render 期间读/写 ref
    // ----------------------------------------------------------
    // 官方推荐：recommended（默认 error）
    // options: 无
    // 社区最佳：一律启用，避免踩到 useRef 官方警告的 pitfall
    //   - 官方文档：https://react.dev/reference/eslint-plugin-react-hooks/lints/refs
    "react-hooks/refs": "warn",

    // effect 依赖项必须是被 memoize 过的引用
    // ----------------------------------------------------------
    // 官方推荐：无
    // options: 无
    // 社区最佳：与 exhaustive-effect-dependencies 组合可换掉 exhaustive-deps；分歧较大，默认关
    //   - 官方文档：https://react.dev/reference/eslint-plugin-react-hooks/lints/memoized-effect-dependencies
    "react-hooks/memoized-effect-dependencies": "off",

    // effect 依赖项穷尽 & 无冗余校验（新一代实现，替代 exhaustive-deps）
    // ----------------------------------------------------------
    // 官方推荐：无（尚在实验期）
    // options: 无
    // 社区最佳：与 exhaustive-deps 二选一即可，暂保持关闭
    //   - 官方文档：https://react.dev/reference/eslint-plugin-react-hooks/lints/exhaustive-effect-dependencies
    "react-hooks/exhaustive-effect-dependencies": "off",

    // 禁止在 useEffect 中同步 setState
    // ----------------------------------------------------------
    // 官方推荐：recommended（默认 error）
    // options: 无
    // 社区最佳：启用；同步 setState 一般意味着可以下沉到 render 或事件
    //   - 官方文档：https://react.dev/reference/eslint-plugin-react-hooks/lints/set-state-in-effect
    "react-hooks/set-state-in-effect": "warn",

    // 禁止在 effect 里从 state 派生 state
    // ----------------------------------------------------------
    // 官方推荐：无
    // options: 无
    // 社区最佳：默认关，推荐用 useMemo 或 render 内派生
    //   - 官方文档：https://react.dev/reference/eslint-plugin-react-hooks/lints/no-deriving-state-in-effects
    "react-hooks/no-deriving-state-in-effects": "off",

    // 应使用 error boundary 而非 try/catch 捕获子组件错误
    // ----------------------------------------------------------
    // 官方推荐：recommended（默认 error）
    // options: 无
    // 社区最佳：启用；React 官方推荐 error boundary
    //   - 官方文档：https://react.dev/reference/eslint-plugin-react-hooks/lints/error-boundaries
    "react-hooks/error-boundaries": "warn",

    // 校验组件 / Hook 的纯度，禁止调用已知有副作用的函数
    // ----------------------------------------------------------
    // 官方推荐：recommended（默认 error）
    // options: 无
    // 社区最佳：启用；React 官方 "Components and Hooks must be pure" 规范
    //   - 官方文档：https://react.dev/reference/eslint-plugin-react-hooks/lints/purity
    "react-hooks/purity": "warn",

    // 禁止在 render 阶段同步 setState
    // ----------------------------------------------------------
    // 官方推荐：recommended（默认 error）
    // options: 无
    // 社区最佳：启用；避免额外的 render 与死循环风险
    //   - 官方文档：https://react.dev/reference/eslint-plugin-react-hooks/lints/set-state-in-render
    "react-hooks/set-state-in-render": "warn",

    // 内部不变量校验（Compiler 内部规则）
    // ----------------------------------------------------------
    // 官方推荐：无
    // options: 无
    // 社区最佳：非用户业务规则，保持默认关闭
    //   - 官方文档：https://react.dev/reference/eslint-plugin-react-hooks/lints/invariant
    "react-hooks/invariant": "off",

    // 未实现的功能占位规则
    // ----------------------------------------------------------
    // 官方推荐：无
    // options: 无
    // 社区最佳：占位规则，保持默认关闭
    //   - 官方文档：https://react.dev/reference/eslint-plugin-react-hooks/lints/todo
    "react-hooks/todo": "off",

    // 校验源码是否包含 React Compiler 无法解析的语法
    // ----------------------------------------------------------
    // 官方推荐：无（Compiler 内部规则）
    // options: 无
    // 社区最佳：仅在启用 React Compiler 时开启
    //   - 官方文档：https://react.dev/reference/eslint-plugin-react-hooks/lints/syntax
    "react-hooks/syntax": "off",

    // 校验源码是否使用 React Compiler 明确不支持的语法
    // ----------------------------------------------------------
    // 官方推荐：recommended（默认 warn）
    // options: 无
    // 社区最佳：启用 React Compiler 项目保持 warn
    //   - 官方文档：https://react.dev/reference/eslint-plugin-react-hooks/lints/unsupported-syntax
    "react-hooks/unsupported-syntax": "warn",

    // 校验 React Compiler 配置项合法
    // ----------------------------------------------------------
    // 官方推荐：recommended（默认 error）
    // options: 无
    // 社区最佳：启用 React Compiler 时必开
    //   - 官方文档：https://react.dev/reference/eslint-plugin-react-hooks/lints/config
    "react-hooks/config": "warn",

    // 校验 React Compiler 的 gating 配置
    // ----------------------------------------------------------
    // 官方推荐：recommended（默认 error）
    // options: 无
    // 社区最佳：启用 React Compiler + gating 时必开
    //   - 官方文档：https://react.dev/reference/react-compiler/gating
    "react-hooks/gating": "warn",

    // 禁止用 eslint-disable 抑制本插件其它规则
    // ----------------------------------------------------------
    // 官方推荐：无（未进入 recommended）
    // options: 无
    // 社区最佳：谨慎启用，业务里可能有临时豁免场景
    //   - 官方文档：https://react.dev/reference/eslint-plugin-react-hooks/lints/rule-suppression
    "react-hooks/rule-suppression": "off",

    // 校验 fbt 国际化组件使用（Facebook 内部约定）
    // ----------------------------------------------------------
    // 官方推荐：无
    // options: 无
    // 社区最佳：仅 Facebook / Meta 内部生态启用，其它项目一律关闭
    //   - 官方文档：https://react.dev/reference/eslint-plugin-react-hooks/lints/fbt
    "react-hooks/fbt": "off",
  },
};
