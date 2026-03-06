
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

"use strict";
"use asm";
"use stricter";
"use babel";
"any other strings like this in the directive prologue";
"this is still the directive prologue";

doSomething();
"use strict";

function foo() {
  "bar";
}

class Foo {
  someMethod() {
    "use strict";
  }
}

function winChange(success) {
  const Resize = () => {
    // allowShortCircuit: true,
    success?.();
    // allowShortCircuit: false,
    success?.();
  };
  Resize();
}
