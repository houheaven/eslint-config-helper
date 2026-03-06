
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable no-var */
/* eslint-disable new-cap */
/* eslint-disable comma-spacing */
/* eslint-disable object-curly-spacing */
/* eslint-disable object-curly-newline */
/* eslint-disable import/first */
/* eslint-disable import/exports-last */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/prefer-enum-initializers */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

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
function foo(a, b,) {
}

foo(a, b,);
new foo(a, b,);


// "imports": "always-multiline"
import {a,} from "foo";


// "exports": "always-multiline"
var bar = "233";
export {bar,};


// importAttributes: "always-multiline"
import foo2 from "foo" with { type: "json", };


// dynamicImports: "never"
import(a,);


// enums: "always-multiline"
enum Foo {Bar,}
enum Color {
  Red,
  Green,
  Blue
}


// generics: "never"
function foo4<T,>(a: T): T {
  return a;
}


// tuples: "never"
type Foo = [string,]
