
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-duplicates */

// 有效
import foo from "../utils/no-named-as-default.js";
import foo2 from "../utils/no-named-as-default.js";

// 无效
// 因为 bar 在源文件中已经被定义过了，此处作为默认导入，容易产生误解
import bar from "../utils/no-named-as-default.js";


// 有效
// export foo from "../utils/no-named-as-default.js";
// export foo2 from "../utils/no-named-as-default.js";

// 无效
// export bar from "../utils/no-named-as-default.js";
