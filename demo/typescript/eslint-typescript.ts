
/* eslint-disable class-methods-use-this */

// ====================================================

// 数组的类型声明
let arr: number[];
arr = [1, 2, 3];
arr = [1, 2, 3, "a"];      // 报错

// ====================================================

// Babel 支持的 ES 新特性：装饰器

declare function dec(num: number): PropertyDecorator;

class Example {
  @dec(1)
  @dec(2)
  method(num: number): void {
    console.log(666, num);
  }
}

export default new Example();

// ====================================================
