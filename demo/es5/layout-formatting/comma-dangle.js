
/* eslint-disable comma-spacing */
/* eslint-disable no-unused-vars */
/* eslint-disable no-redeclare */

// "arrays": "always-multiline"
var arr = [1,2,];

var arr = [1,
  2,];

var arr = [
  1,
  2
];


// "objects": "always-multiline"
var foo = {
  bar: "baz",
  qux: "quux"
};

var foo = { bar: "baz", qux: "quux", };

foo({
  bar: "baz",
  qux: "quux"
});


// "functions": "never"
// function foo(a, b,) {
// }

// foo(a, b,);
// new foo(a, b,);


// "imports": "always-multiline"
// import {a,} from "foo";


// "exports": "always-multiline"
// var bar = "233";
// export {bar,};


// importAttributes: "always-multiline"
// import foo2 from "foo" with { type: "json", };


// dynamicImports: "never"
// import(a,);


// enums: "always-multiline"
// enum Foo = {Bar,}
// enum Color {
//   Red,
//   Green,
//   Blue
// }


// generics: "never"
// function foo4<T,>(a: T): T {
//   return a;
// }


// tuples: "never"
// type Foo = [string,]

