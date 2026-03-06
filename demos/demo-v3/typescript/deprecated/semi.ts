
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable max-classes-per-file */
/* eslint-disable import/group-exports */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

const name = "ESLint"

object.method = function() {
  // ...
}


// omitLastInOneLineBlock 选项的演示示例

if (foo) { bar() }

if (foo) { bar(); baz() }

function f() { bar(); baz() }

class C {
  bar = 1
  foo() { bar(); baz() }
  static { bar(); baz() }
}


// omitLastInOneLineClassBody 选项的演示示例

export class SomeClass {
  logType() {
    console.log(this.type);
    console.log(this.anotherType);
  }
}

export class Variant1 extends SomeClass {type = 1}
export class Variant2 extends SomeClass {type = 2; anotherType = 3}
