
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable no-bitwise */
/* eslint-disable @typescript-eslint/no-mixed-enums */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-enum-initializers */

// 正确示例
enum Valid {
  A, // No initializer; initialized with ascending integers starting from 0
  B = "TestStr", // A regular string
  C = "A template literal string", // A template literal without interpolation
  D = 4, // A number
}

// 错误示例
const str = "Test";
const string1 = "string1";
const string2 = "string2";

enum Invalid {
  A = str, // Variable assignment
  B = `Interpolates ${string1} and ${string2}`, // Template literal with interpolation
  C = 2 + 2, // Expression assignment
  D = C, // Assignment to another enum member
}


// 包含位运算表达式
enum InvalidBitwise {
  A = 1 << 0, // Bitwise left shift
  B = 1 >> 0, // Bitwise right shift
  C = 1 >>> 0, // Bitwise unsigned right shift
  D = 1 | 0, // Bitwise OR
  E = 1 & 0, // Bitwise AND
  F = 1 ^ 0, // Bitwise XOR
  G = ~1, // Bitwise NOT
}

// 包含位运算表达式
const x = 1;
enum Foo {
  A = x << 0,
  B = x >> 0,
  C = x >>> 0,
  D = x | 0,
  E = x & 0,
  F = x ^ 0,
  G = ~x,
}
