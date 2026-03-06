
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable no-var */
/* eslint-disable keyword-spacing */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-extraneous-class */
/* eslint-disable @typescript-eslint/no-useless-constructor */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

function foo () {
  // ...
}

var bar = function () {
  // ...
};

var bar = function foo () {
  // ...
};

class Foo {
  constructor () {
    // ...
  }
}

var baz = {
  bar () {
    // ...
  },
};

try {
  // ...
}
catch (e) {
  // ...
}

// asyncArrow 选项的演示示例
var baz = async() => 1;
