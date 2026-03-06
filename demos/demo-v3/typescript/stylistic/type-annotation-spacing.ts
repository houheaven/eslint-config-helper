
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable @typescript-eslint/no-type-alias */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-inferrable-types */

// with space after, but not before (default if no option is specified)
let foo: string = "bar";

// with no spaces
let foo:string = "bar";

// with space before and after
let foo : string = "bar";

// with space before, but not after
let foo :string = "bar";

// with spaces before and after the fat arrow (default if no option is specified)
type Foo = (string: name) => string;

// with no spaces between the fat arrow
type Foo = (string: name)=>string;

// with space after, but not before the fat arrow
type Foo = (string: name)=> string;

// with space before, but not after the fat arrow
type Foo = (string: name) =>string;

function foo(): string {}
function foo():string {}
function foo() :string {}
function foo() : string {}

class Foo {
  attr1: string;
  attr2:string;
  attr3 :string;
  attr4 : string;
}
