
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-type-assertion */
/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

interface T { foo: number; }

const x = { foo: 1 } as T;

function bar() {
  return { foo: 1 } as T;
}

const x = ["foo"] as T;

function bar() {
  return ["foo"] as T;
}

const x: T = { foo: 1 };
const y = { foo: 1 } as any;
const z = { foo: 1 } as unknown;

function bar(): T {
  return { foo: 1 };
}


const x: T = { foo: 1 };
const y = { foo: 1 } as any;
const z = { foo: 1 } as unknown;
bar({ foo: 1 } as T);
new Clazz({ foo: 1 } as T);
function bar() {
  throw { foo: 1 } as Foo;
}
// const foo = <Foo props={{ bar: 1 } as Bar} />;
