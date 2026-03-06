
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

// 错误示例
function second<A, B>(a: A, b: B): B {
  return b;
}

function parseJSON<T>(input: string): T {
  return JSON.parse(input);
}

function printProperty<T, K extends keyof T>(obj: T, key: K): void {
  console.log(obj[key]);
}


// 正确示例
function second2<B>(a: unknown, b: B): B {
  return b;
}

function parseJSON2(input: string): unknown {
  return JSON.parse(input);
}

function printProperty2<T>(obj: T, key: keyof T): void {
  console.log(obj[key]);
}

// T appears twice: in the type of arg and as the return type
function identity2<T>(arg: T): T {
  return arg;
}

// T appears twice: "keyof T" and in the inferred return type (T[K]).
// K appears twice: "key: K" and in the inferred return type (T[K]).
function getProperty2<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
