
/* eslint-disable @typescript-eslint/method-signature-style */
/* eslint-disable max-classes-per-file */

// ====================================================

// 类

interface Eat {
    eat(food: string): void;
}
interface Run {
    run(distance: number): void;
}

class Person implements Run, Eat {
  eat(food: string): void {
    console.log(`优雅的进餐：${food}`);
  }

  run(distance: number): void {
    console.log(`直立行走：${distance}`);
  }
}

class Animal implements Run, Eat {
  eat(food: string): void {
    console.log(`呼噜呼噜地吃：${food}`);
  }

  run(distance: number): void {
    console.log(`爬行：${distance}`);
  }
}

const person = new Person();
person.eat("煎饼果子");
person.run(1000);

const dog = new Animal();
dog.eat("狗粮");
dog.run(5000);

// ====================================================

// 避免污染全局变量
export default undefined;
