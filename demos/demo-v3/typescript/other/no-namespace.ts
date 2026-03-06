
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-namespace-keyword */

declare module "foo" {}
// anything inside a d.ts file

module foo {}
namespace foo {}

declare module foo {}
declare namespace foo {}
