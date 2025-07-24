
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

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
    success && success();
    // allowShortCircuit: false,
    success?.();
  };
  Resize();
}
