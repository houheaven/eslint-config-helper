
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/method-signature-style */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

// 演示 @typescript-eslint/class-methods-use-this 规则
// 该规则要求类方法必须使用 this 关键字

class User {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // 正确：方法使用了 this
  getName(): string {
    return this.name;
  }

  // 正确：方法使用了 this
  getAge(): number {
    return this.age;
  }

  // 错误：方法没有使用 this，但应该使用
  // 这会触发 class-methods-use-this 错误
  static createDefaultUser() {
    return new User("default", 0);
  }

  // 错误：方法没有使用 this
  // 这会触发 class-methods-use-this 错误
  getGreeting(): string {
    return "Hello!";
  }

  // 正确：虽然方法没有使用 this，但它是静态方法
  // 静态方法不需要使用 this
  static validateName(name: string): boolean {
    return name.length > 0;
  }
}

// 抽象类示例
abstract class Animal {
  // 正确：抽象方法不需要使用 this
  abstract makeSound(): void;

  // 错误：具体方法没有使用 this
  // 这会触发 class-methods-use-this 错误
  sleep(): void {
    console.log("Sleeping");
  }
}

class Dog extends Animal {
  private name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }

  // 正确：实现了抽象方法
  makeSound(): void {
    console.log(`${this.name} says: Woof!`);
  }

  // 正确：方法使用了 this
  getName(): string {
    return this.name;
  }
}

abstract class Base {
  abstract method(): void;
  abstract property: () => void;
}

class Derived extends Base {
  override method() {}
  override property = () => {};
}


interface Base2 {
  method(): void;
}

class Derived2 implements Base2 {
  method() {}
  property = () => {};

  private privateMethod() {}
  private privateProperty = () => {};

  protected protectedMethod() {}
  protected protectedProperty = () => {};
}
