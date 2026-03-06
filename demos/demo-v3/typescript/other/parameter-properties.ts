
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-extraneous-class */
/* eslint-disable @typescript-eslint/no-useless-constructor */

class Foo {
  constructor(name: string) {}
}

class Foo {
  constructor(readonly name: string) {}
}

class Foo {
  constructor(private name: string) {}
}

class Foo {
  constructor(protected name: string) {}
}

class Foo {
  constructor(public name: string) {}
}

class Foo {
  constructor(private readonly name: string) {}
}

class Foo {
  constructor(protected readonly name: string) {}
}

class Foo {
  constructor(public readonly name: string) {}
}

class Foo {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Foo {
  public readonly name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Foo {
  constructor(name: string) {
    this.name = name;
  }
  name: string;
}
