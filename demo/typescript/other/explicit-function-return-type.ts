
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable no-void */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable import/exports-last */
/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable @typescript-eslint/no-type-alias */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/method-signature-style */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-type-assertion */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-meaningless-void-operator */

// allowExpressions
function test() {}
const fn = () => {};
export default () => {};

node.addEventListener("click", () => {});
node.addEventListener("click", function() {});
const foo = arr.map(i => i * i);


// allowTypedFunctionExpressions
const arrowFn = () => "test";

const funcExpr = function() {
  return "test";
};

const objectProp = {
  foo: () => 1,
};


type FuncType = () => string;

let arrowFn: FuncType = () => "test";

let funcExpr: FuncType = function() {
  return "test";
};

const asTyped = (() => "") as () => string;

interface ObjectType {
  foo(): number;
}
let objectProp: ObjectType = {
  foo: () => 1,
};
const objectPropAs = {
  foo: () => 1,
} as ObjectType;

declare function functionWithArg(arg: () => number);
functionWithArg(() => 1);

declare function functionWithObjectArg(arg: { method: () => number; });
functionWithObjectArg({
  method() {
    return 1;
  },
});


// allowHigherOrderFunctions

const arrowFn = () => (): void => {};

function fn() {
  return function(): void {};
}

const arrowFn = () => () => {};

function fn() {
  return function() {};
}


// allowDirectConstAssertionInArrowFunctions

const func = (value: number) => ({ foo: "bar", value }) as const;
const func = () => x as const;

const func = (value: number) => ({ type: "X", value }) as any;
const func = (value: number) => ({ type: "X", value }) as Action;


// allowConciseArrowFunctionExpressionsStartingWithVoid

const log = (message: string) => void console.log(message);


const join = (a: string, b: string) => `${a}${b}`;

const log = (message: string) => {
  console.log(message);
};


// allowFunctionsWithoutTypeParameters

function foo<T>(t: T) {
  return t;
}

const bar = <T>(t: T) => t;


// allowIIFEs
const foo = (() => "foo")();

const bar = (function() {
  return "bar";
})();
