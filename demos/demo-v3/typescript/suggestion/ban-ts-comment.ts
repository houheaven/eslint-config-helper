
// 说明：为了演示 TS 报错效果和忽略报错的功能，需要开启 IDE 的 TS 检查功能
// .vscode/settings.json 中的 "typescript.validate.enable" 选项需要设置为 true

/* eslint-disable @typescript-eslint/no-unused-vars */

// @ts-ignore: 忽略下一行代码的类型检查错误
const v1: number[] = ["a", "b"];    // TS 不会报错
const v2: number[] = ["a", "b"];    // TS 会报错

// @ts-expect-error: 预期下一行代码会报错，虽然编译通过，但实际运行可能会报错
const x1: number[] = ["a", "b"];    // TS 不会报错
const x2: number[] = ["a", "b"];    // TS 会报错
