
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/parameter-properties */

class User {
  name: string;
  email: string;
  age: number;
  address: string;
  
  // TypeScript 支持一种简洁语法：在构造函数参数前使用 public、private、protected 或 readonly 修饰符，可自动将参数声明为类属性并赋值。
  constructor(
    public name: string,
    private email: string,
    age: number,
    address: string
  ) {
    this.name = name;     // ❌ 冗余！name 已通过参数属性自动赋值
    this.email = email;   // ❌ 冗余！email 已通过参数属性自动赋值
    this.age = age;
    this.address = address;
  }
}
