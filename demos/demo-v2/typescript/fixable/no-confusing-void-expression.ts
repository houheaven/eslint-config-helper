
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable no-void */
/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-return */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-meaningless-void-operator */
/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
/* eslint-disable @typescript-eslint/explicit-function-return-type */


// somebody forgot that `alert` doesn't return anything
const response = alert("Are you sure?");
console.log(alert("Are you sure?"));

// it looks like we are returning the result of `console.error` (fixable)
function doSomething() {
  if (!somethingToDo) {
    return console.error("Nothing to do!");
  }

  console.log("Doing a thing...");
}


// ignoreArrowShorthand
promise.then(value => window.postMessage(value));


// ignoreVoidOperator

// - now it's obvious that we don't expect any response
promise.then(value => void window.postMessage(value));

// - now it's explicit that we don't want to return anything
function doSomething() {
  if (!somethingToDo) {
    return void console.error("Nothing to do!");
  }

  console.log("Doing a thing...");
}

// - we are sure that we want to always log `undefined`
console.log(void alert("Hello, world!"));


// ignoreVoidReturningFunctions

function foo(): void {
  return console.log();
}

function onError(callback: () => void): void {
  callback();
}

onError(() => console.log("oops"));
