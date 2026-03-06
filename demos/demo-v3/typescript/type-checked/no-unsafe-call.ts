
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable new-cap */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/dot-notation */

declare const anyVar: any;
declare const nestedAny: { prop: any; };

anyVar();
anyVar.a.b();

nestedAny.prop();
nestedAny.prop["a"]();

new anyVar();
new nestedAny.prop();

anyVar`foo`;
nestedAny.prop`foo`;
