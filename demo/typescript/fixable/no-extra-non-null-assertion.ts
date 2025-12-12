
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-non-null-assertion */

// Demo 1: 连续的非空断言 - 触发 no-extra-non-null-assertion
const value1 = "hello";
const result1 = value1!!;

// Demo 2: 变量声明中的连续非空断言 - 触发 no-extra-non-null-assertion
const foo: { bar: number } | null = null;
const bar = foo!!!.bar;

function foo(bar: number | undefined) {
  const bar: number = bar!!!;
}

function foo(bar?: { n: number }) {
  return bar!?.n;
}

// Demo 3: 函数调用中的连续非空断言 - 触发 no-extra-non-null-assertion
function getString(): string | null {
  return "test";
}
const funcResult = getString()!!;

// Demo 4: 属性访问中的连续非空断言 - 触发 no-extra-non-null-assertion
interface User {
  name?: string;
  age?: number;
}
const user: User = { name: "John" };
const userName = user.name!!;

// Demo 5: 数组元素访问中的连续非空断言 - 触发 no-extra-non-null-assertion
const items: (string | null)[] = ["item1", null, "item3"];
const item = items[0]!!;

// Demo 6: 三元表达式中的连续非空断言 - 触发 no-extra-non-null-assertion
const condition = true;
const conditionalResult = (condition ? "yes" : "no")!!;

// Demo 7: 括号表达式中的连续非空断言 - 触发 no-extra-non-null-assertion
const expression = ("test")!!;

// Demo 8: 正确的非空断言使用（对比用）
const properValue = "hello";
const properResult = properValue!;

// Demo 9: 不需要非空断言的情况（对比用）
const definiteString = "definite";
const normalAccess = definiteString;

// Demo 10: 可选链操作符的正确使用（对比用）
const optionalUser: User = {};
const optionalName = optionalUser.name?.toUpperCase();
