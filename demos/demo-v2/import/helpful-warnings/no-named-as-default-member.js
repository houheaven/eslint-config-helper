
/* eslint-disable no-unused-vars */
/* eslint-disable import/first */
/* eslint-disable import/no-duplicates */

// Caution: `foo` also has a named export `bar`.
// Check if you meant to write `import {bar} from './foo.js'` instead.
import foo from "../utils/no-named-as-default.js";
const bar = foo.bar;

import foo2 from "../utils/no-named-as-default.js";
const bar2 = foo2.bar;

// Caution: `foo` also has a named export `bar`.
// Check if you meant to write `import {bar} from './foo.js'` instead.
// 取消注释，查看效果
// import foo3 from "../utils/no-named-as-default.js";
// const { bar } = foo3;
