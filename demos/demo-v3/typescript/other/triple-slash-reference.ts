
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable import/first */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-expressions */


/// <reference lib="code" />
globalThis.value;


/// <reference path="code" />
globalThis.value;


/// <reference types="code" />
import { valueA } from "code";
globalThis.valueB;
