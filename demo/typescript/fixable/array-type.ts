
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

const x: string[] = ["a", "b"];
const y: readonly string[] = ["a", "b"];
const z: Readonly<string[]> = ["a", "b"];

const x: Array<string> = ["a", "b"];
const y: ReadonlyArray<string> = ["a", "b"];
const z: Readonly<Array<string>> = ["a", "b"];

const a: Array<string | number> = ["a", "b"];
const b: Array<{ prop: string; }> = [{ prop: "a" }];
const c: Array<() => void> = [() => {}];
const d: MyType[] = ["a", "b"];
const e: string[] = ["a", "b"];
const f: readonly string[] = ["a", "b"];

const a: (string | number)[] = ["a", "b"];
const b: { prop: string; }[] = [{ prop: "a" }];
const c: (() => void)[] = [() => {}];
const d: Array<MyType> = ["a", "b"];
const e: Array<string> = ["a", "b"];
const f: ReadonlyArray<string> = ["a", "b"];
