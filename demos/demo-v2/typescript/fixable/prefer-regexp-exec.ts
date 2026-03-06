
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable require-unicode-regexp */

"something".match(/thing/);

"some things are just things".match(/thing/);

const text = "something";
const search = /thing/;
text.match(search);
