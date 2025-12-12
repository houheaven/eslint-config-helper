
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable @typescript-eslint/no-unused-vars */

// Demo 1: 空接口定义
interface EmptyInterface {}

// Demo 2: 扩展空接口
interface BaseEmpty {}
interface ExtendedInterface extends BaseEmpty {}

// Demo 3: 正确的接口定义（对比用）
interface Foo1 {
  name: string;
  age: number;
}

interface Foo2 {
  value: number;
}

interface Baz extends Foo1, Foo2 {}
