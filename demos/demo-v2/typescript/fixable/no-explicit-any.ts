
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/array-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-function-type */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/method-signature-style */
/* eslint-disable @typescript-eslint/no-empty-function */

// Demo 1: 变量声明中使用 any 类型 - 触发 no-explicit-any
let variableAny: any = "test";

// Demo 2: 函数参数中使用 any 类型 - 触发 no-explicit-any
function processData(data: any): void {
  console.log(data);
}

// Demo 3: 函数返回值中使用 any 类型 - 触发 no-explicit-any
function getData(): any {
  return { name: "test" };
}

// Demo 4: 数组类型中使用 any - 触发 no-explicit-any
const arrayAny: any[] = [1, "string", true];

// Demo 5: 对象属性中使用 any 类型 - 触发 no-explicit-any
interface UserInfo {
  name: string;
  age: any;
  data: any[];
}

// Demo 6: 泛型中使用 any - 触发 no-explicit-any
class DataProcessor<T = any> {
  process(item: T): any {
    return item;
  }
}

// Demo 7: 类型别名中使用 any - 触发 no-explicit-any
type GenericType = any;

// Demo 8: 正确的类型定义（对比用）
let properVariable: unknown = "test";
function properFunction(data: unknown): unknown {
  return data;
}
const properArray: unknown[] = [1, "string", true];

// Demo 9: 使用具体类型（对比用）
interface ProperUserInfo {
  name: string;
  age: number;
  data: string[];
}

// Demo 10: ignoreRestArgs
function foo1(...args: any[]): void {}
function foo2(...args: readonly any[]): void {}
function foo3(...args: Array<any>): void {}
function foo4(...args: ReadonlyArray<any>): void {}

declare function bar(...args: any[]): void;

const baz = (...args: any[]) => {};
const qux = function(...args: any[]) {};

type Quux = (...args: any[]) => void;
type Quuz = new (...args: any[]) => void;

interface Grault {
  (...args: any[]): void;
}
interface Corge {
  new (...args: any[]): void;
}
interface Garply {
  f(...args: any[]): void;
}
