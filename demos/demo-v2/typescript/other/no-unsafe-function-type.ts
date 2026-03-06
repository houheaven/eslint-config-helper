
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable arrow-parens */
/* eslint-disable @typescript-eslint/array-type */
/* eslint-disable @typescript-eslint/no-type-alias */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

// ✓ 正确示例：使用具体的函数类型
const safeFunction: () => void = () => {};

// ✓ 正确示例：使用带有参数和返回值的具体函数类型
const stringToNumber: (text: string) => number = (text) => text.length;

// ✓ 正确示例：使用泛型函数类型
const identity: <T>(value: T) => T = (value) => value;

// ✓ 正确示例：在接口中使用具体的函数类型
interface SafeInterface {
  onClick: (event: Event) => void;
}

// ✓ 正确示例：在类型别名中使用具体的函数类型
type SafeCallback = (error: Error | null, result?: any) => void;

// ✗ 错误示例：使用 Function 类型
const unsafeFunction: Function = () => {};

// ✗ 错误示例：在参数中使用 Function 类型
function execute(callback: Function) {
  callback();
}

// ✗ 错误示例：在返回值中使用 Function 类型
function getCallback(): Function {
  return () => {};
}

// ✗ 错误示例：在接口中使用 Function 类型
interface UnsafeInterface {
  handler: Function;
}

// ✗ 错误示例：在类型别名中使用 Function 类型
type UnsafeCallback = Function;

// ✗ 错误示例：在类属性中使用 Function 类型
class UnsafeClass {
  public handler: Function;
  
  constructor(handler: Function) {
    this.handler = handler;
  }
}

// ✗ 错误示例：使用 Array<Function>
const functionList: Array<Function> = [() => {}, () => {}];

// ✗ 错误示例：使用 Function[]
const functionArray: Function[] = [() => {}, () => {}];
