
/* eslint-disable no-undef */
/* eslint-disable no-redeclare */
/* eslint-disable no-unused-vars */

var name = "ESLint"

object.method = function() {
  // ...
}


// omitLastInOneLineBlock 选项的演示示例

if (foo) { bar() }

if (foo) { bar(); baz() }

function f() { bar(); baz() }

// class C {
//   bar = 1
//   foo() { bar(); baz() }
//   static { bar(); baz() }
// }


// omitLastInOneLineClassBody 选项的演示示例

// export class SomeClass{
//   logType(){
//     console.log(this.type);
//     console.log(this.anotherType);
//   }
// }

// export class Variant1 extends SomeClass{type=1}
// export class Variant2 extends SomeClass{type=2; anotherType=3}
