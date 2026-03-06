
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable no-undefined */
/* eslint-disable arrow-body-style */
/* eslint-disable operator-linebreak */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-type-alias */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */


function test() {
    if (a) {
        b = c;
        function foo(d) {
            e = f;
        }
    }
}


// offsetTernaryExpressions
condition
  ? () => {
    return true;
  }
  : condition2
    ? () => {
      return true;
    }
    : () => {
      return false;
    };


// offsetTernaryExpressionsOffsetCallExpressions
condition
  ? gerUser({
    name: "foo",
    age: 20,
  })
  : condition2
    ? gerUser({
      id: "bar",
    })
    : undefined;


// assignmentOperator
let foo
= "bar";

foo
= "baz";

type Foo<
  T =
  string
>
= T;

enum Bar {
  A
  = 1,
}
