
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unused-vars */

/* "beforeColon": false */
var obj = { "foo" : 42 };


/* "afterColon": true */
var obj = { "foo":42 };


/* "mode": "strict" */
call({
  foobar: 42,
  bat:    2 * 2,
});


/* "align": "value" */

// var obj = {
//   a:    value,
//   bcde: 42,

//   fg: foo(),
//   h:  function() {
//     return this.a;
//   },
//   ijkl: "Non-consecutive lines form a new group",
// };

// var obj = { a: "foo", longPropertyName: "bar" };
