
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable arrow-body-style */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-restricted-properties */
/* eslint-disable prefer-exponentiation-operator */
/* eslint-disable import/export */
/* eslint-disable import/exports-last */
/* eslint-disable import/group-exports */
/* eslint-disable @typescript-eslint/no-type-alias */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-extraneous-class */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

// ✓ 正确示例：导出的函数有明确的参数类型和返回类型
export function add(a: number, b: number): number {
  return a + b;
}

// ✓ 正确示例：导出的箭头函数有明确的参数类型和返回类型
export const multiply = (x: number, y: number): number => x * y;

// ✓ 正确示例：导出的类方法有明确的参数类型和返回类型
export class Calculator {
  public divide(a: number, b: number): number {
    return a / b;
  }

  // ✓ 正确示例：静态方法也需要明确的类型
  public static create(): Calculator {
    return new Calculator();
  }
}

// ✓ 正确示例：导出的接口方法定义
export interface MathOperation {
  execute: (a: number, b: number) => number;
}

// ✓ 正确示例：导出的类型别名中的函数类型
export type BinaryOperation = (x: number, y: number) => number;

// ✗ 错误示例：缺少参数类型注解
export function subtract(a, b): number {
  return a - b;
}

// ✗ 错误示例：缺少返回类型注解
export function greet(name: string) {
  return `Hello, ${name}!`;
}

// ✗ 错误示例：导出的箭头函数缺少类型注解
export const power = (base, exponent) => {
  return Math.pow(base, exponent);
};

// ✗ 错误示例：类方法缺少参数类型
export class StringUtils {
  public concatenate(str1, str2): string {
    return str1 + str2;
  }

  // ✗ 错误示例：类方法缺少返回类型
  public reverse(text: string) {
    return text.split("").reverse().join("");
  }
}

// ✗ 错误示例：静态方法缺少类型注解
export class Factory {
  public static build(config) {
    return new Factory();
  }
}

// ✓ 正确示例：非导出函数不需要类型注解（规则只适用于模块边界）
function internalHelper(a, b) {
  return a + b;
}

// ✓ 正确示例：非导出类的方法不需要类型注解
class InternalClass {
  public method(x, y) {
    return x * y;
  }
}

// ✓ 正确示例：默认导出有明确的类型注解
export default function defaultExport(value: string): boolean {
  return value.length > 0;
}

// ✗ 错误示例：默认导出缺少类型注解
export default function badDefaultExport(value) {
  return value;
}

// ✓ 正确示例：使用 any 类型是允许的（根据配置）
export function processAny(data: any): any {
  return data;
}

// ✓ 正确示例：void 返回类型需要明确声明
export function logMessage(message: string): void {
  console.log(message);
}

// ✗ 错误示例：异步函数缺少返回类型注解
export async function fetchData(url: string) {
  return await fetch(url);
}

// ✓ 正确示例：异步函数有明确的返回类型
export async function fetchDataTyped(url: string): Promise<Response> {
  return await fetch(url);
}

// ✓ 正确示例：函数重载需要为每个签名添加类型
export function processValue(value: string): string;
export function processValue(value: number): number;
export function processValue(value: string | number): string | number {
  return value;
}
