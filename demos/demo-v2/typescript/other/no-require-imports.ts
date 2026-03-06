
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable no-var */
/* eslint-disable no-import-assign */
/* eslint-disable import/first */
/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

const lib1 = require("lib1");
const { lib2 } = require("lib2");
import lib3 = require("lib3");


// { allow: ['/package\\.json$'] }
console.log(require("../package.json").version);
console.log(require("../data.json").version);


// allowAsImport
import foo = require("foo");
import foo from "foo";
var foo = require("foo");
let foo = require("foo");
const foo = require("foo");

