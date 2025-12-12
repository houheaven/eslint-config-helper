
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable import/first */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/consistent-type-specifier-style */
/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-import-type-side-effects */

// prefer: "type-imports"
import type { Foo } from "Foo";
import type Bar from "Bar";
type T = Foo;
const x: Bar = 1;

// prefer: "no-type-imports"
import { Foo } from "Foo";
import Bar from "Bar";
type T = Foo;
const x: Bar = 1;

// fixStyle: "separate-type-imports"
import type { Foo } from "Foo";
import type Bar from "Bar";
type T = Foo;
const x: Bar = 1;

// fixStyle: "inline-type-imports"
import { type Foo } from "Foo";
import type Bar from "Bar";
type T = Foo;
const x: Bar = 1;
