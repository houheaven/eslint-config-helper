
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-inner-declarations */


function test() {
    if (a) {
        b = c;
        function foo(d) {
            e = f;
        }
    }
}


// offsetTernaryExpressions
// condition
//   ? () => {
//     return true;
//   }
//   : condition2
//     ? () => {
//       return true;
//     }
//     : () => {
//       return false;
//     };


// offsetTernaryExpressionsOffsetCallExpressions
// condition
//   ? gerUser({
//     name: 'foo',
//     age: 20,
//   })
//   : condition2
//     ? gerUser({
//       id: 'bar',
//     })
//     : undefined


// assignmentOperator
// let foo
// = 'bar';

// foo
// = 'baz';

// type Foo<
//   T =
//   string
// >
// = T;

// enum Bar {
//   A
//   = 1,
// }
