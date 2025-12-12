
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { parse } from "url";

// 'parse' is deprecated. Use the WHATWG URL API instead.
const url = parse("/foo");


/** @deprecated Use apiV2 instead. */
declare function apiV1(): Promise<string>;

declare function apiV2(): Promise<string>;

await apiV1();
