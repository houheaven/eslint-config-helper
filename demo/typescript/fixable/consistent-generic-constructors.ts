
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable @typescript-eslint/no-unused-vars */

// type-annotation
const map = new Map<string, number>();
const map: Map<string, number> = new MyMap();
const set = new Set<string>();
const set = new Set();
const set: Set<string> = new Set<string>();

// constructor
const map: Map<string, number> = new Map();
const set: Set<string> = new Set();
const set = new Set();
const set: Set<string> = new Set<string>();
