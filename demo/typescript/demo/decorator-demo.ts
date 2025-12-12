
/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-shadow */

// 类装饰器
function sealed(constructor: Function): void {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@sealed
class BugReport {
  type = "report";
  title: string;

  constructor(t: string) {
    this.title = t;
  }
}

const report = new BugReport("Needs fixing");
console.log(report.title);


// 方法装饰器
function dec(id: number): MethodDecorator {
  console.log("evaluated", id);
  return (
    _target: Object,
    _propertyKey: string | symbol,
    _descriptor: PropertyDescriptor
  ): void => {
    console.log("executed", id);
  };
}

class DecExample {
  @dec(1)
  @dec(2)
  public say(): void {
    console.log("typescript decorator");
  }
}

new DecExample().say();
