
/* eslint-disable @typescript-eslint/no-unused-vars */

// Demo 1: no-loss-of-precision - 使用超出安全整数范围的数字字面量
const bigNumber1 = 9007199254740993; // 2^53 + 1，超出安全整数范围
const bigNumber2 = 123456789012345678901234567890n; // BigInt 字面量，不会丢失精度

// Demo 2: no-loss-of-precision - 使用极小的小数
const smallNumber1 = 0.123456789012345678901234567890; // 过多的小数位，会丢失精度
const smallNumber2 = 1.23456789012345678901234567890e-10; // 科学计数法表示的小数
