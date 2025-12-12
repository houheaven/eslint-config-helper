
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable no-constant-condition */
/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

// Demo 1: 变量遮蔽 - 函数参数与内部变量同名
function demo1(name: string) {
  const name = "local"; // 触发 no-shadow 规则，因为 name 已经作为参数存在
  console.log(name);
}

// Demo 2: 变量遮蔽 - 外层变量与内层变量同名
const age = 25;

function demo2() {
  const age = 30; // 触发 no-shadow 规则，因为外层已经存在 age 变量
  console.log(age);
}


// types
type Bar<Foo> = 1;
type Foo = 1;

// functions
if (true) {
  const b = 6;
}

function b() {}


// ignoreTypeValueShadow: 忽略类型值遮蔽
// 当设置为 true 时，ESLint 不会报告类型值遮蔽的问题
type Foo = number;
interface Bar {
  prop: number;
}

function f() {
  const Foo = 1;
  const Bar = "test";
}
