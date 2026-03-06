
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable import/no-duplicates */
/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/consistent-type-specifier-style */

import { type A } from "mod";
import { type A as AA } from "mod";
import { type A, type B } from "mod";
import { type A as AA, type B as BB } from "mod";
