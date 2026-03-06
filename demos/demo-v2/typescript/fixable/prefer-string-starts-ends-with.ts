
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable no-eq-null */
/* eslint-disable require-unicode-regexp */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unused-expressions */

declare const foo: string;

// starts with
foo[0] === "b";
foo.charAt(0) === "b";
foo.indexOf("bar") === 0;
foo.slice(0, 3) === "bar";
foo.substring(0, 3) === "bar";
foo.match(/^bar/) != null;
/^bar/.test(foo);

// ends with
foo[foo.length - 1] === "b";
foo.charAt(foo.length - 1) === "b";
foo.lastIndexOf("bar") === foo.length - 3;
foo.slice(-3) === "bar";
foo.substring(foo.length - 3) === "bar";
foo.match(/bar$/) != null;
/bar$/.test(foo);


declare const text: string;

text[0] === "a";
text[0] === text[0].toUpperCase();
text[0] === text[1];
text[text.length - 1] === "b";
