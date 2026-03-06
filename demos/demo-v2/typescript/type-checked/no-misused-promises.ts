
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable no-await-in-loop */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-async-promise-executor */
/* eslint-disable no-unmodified-loop-condition */
/* eslint-disable @typescript-eslint/await-thenable */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/promise-function-async */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/explicit-function-return-type */


// checksConditionals
const promise = Promise.resolve("value");

if (promise) {
  // Do something
}

const val = promise ? 123 : 456;

[1, 2, 3].filter(() => promise);

while(promise) {
  // Do something
}


// checksSpreads
const getData = () => fetch("/");

console.log({ foo: 42, ...getData() });

const awaitData = async () => {
  await fetch("/");
};

console.log({ foo: 42, ...awaitData() });


// checksVoidReturn
[1, 2, 3].forEach(async value => {
  await fetch(`/${value}`);
});

// for-of puts `await` in outer context
for(const value of [1, 2, 3]) {
  await doSomething(value);
}

new Promise<void>(async (resolve, reject) => {
  await fetch("/");
  resolve();
});

document.addEventListener("click", async () => {
  console.log("synchronous call");
  await fetch("/");
  console.log("synchronous call");
});

interface MySyncInterface {
  setThing: () => void;
}
class MyClass implements MySyncInterface {
  async setThing(): Promise<void> {
    this.thing = await fetchThing();
  }
}

interface MyAsyncInterface {
  setThing: () => Promise<void>;
}
class MyClass2 implements MyAsyncInterface {
  async setThing(): Promise<void> {
    this.thing = await fetchThing();
  }
}
