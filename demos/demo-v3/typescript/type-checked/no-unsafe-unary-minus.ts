
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable @typescript-eslint/no-empty-object-type */

declare const d: number;
console.log(-d);

declare const a: string;
console.log(-a);

declare const b: {};
console.log(-b);

declare const c: () => void;
console.log(-c);
