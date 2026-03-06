
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/init-declarations */

// Demo 1: 变量在声明之前使用
console.log(myVar);
const myVar = 10;

// Demo 2: 函数在声明之前调用
const result = addNumbers(5, 3);
function addNumbers(a: number, b: number): number {
  return a + b;
}

// Demo 3: 枚举在声明之前使用
const x = Foo;
const y = Foo.FOO;
enum Foo {
  FOO = 1,
}

// Demo 4: 类型在声明之前使用
let myVar2: StringOrNumber;
type StringOrNumber = string | number;

// Demo 5: 类型在声明之前使用
let var1: StringOrNumber2;
type StringOrNumber2 = string | number;

let var2: Enum;
enum Enum {}
