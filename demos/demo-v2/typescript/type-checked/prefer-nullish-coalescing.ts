
/* eslint-disable no-cond-assign */
/* eslint-disable no-const-assign */
/* eslint-disable no-unmodified-loop-condition */
/* eslint-disable no-empty */

/* eslint-disable eqeqeq */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-undefined */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-redeclare */

// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable no-eq-null */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

declare const a: string | null;
declare const b: string | null;

const c = a || b;


// ignoreTernaryTests
declare const a: any;
a ?? "a string";
a !== undefined && a !== null ? a : "a string";
a === undefined || a === null ? "a string" : a;
a == undefined ? "a string" : a;
a == null ? "a string" : a;

declare const b: string | undefined;
b ?? "a string";
b !== undefined ? b : "a string";
b === undefined ? "a string" : b;
b ? b : "a string";
!b ? "a string" : b;

declare const c: string | null;
c ?? "a string";
c !== null ? c : "a string";
c === null ? "a string" : c;
c ? c : "a string";
!c ? "a string" : c;


// ignoreIfStatements
declare let foo: { a: string; } | null;
declare function makeFoo(): { a: string; };

function lazyInitializeFooByTruthiness() {
  foo = foo ?? makeFoo();
  if (!foo) {
    foo = makeFoo();
  }
}

function lazyInitializeFooByNullCheck() {
  foo = foo ?? makeFoo();
  if (foo == null) {
    foo = makeFoo();
  }
}


// ignoreConditionalTests
declare let a: string | null;
declare const b: string | null;

if (a || b) {}
if ((a = a || b)) {}
while(a || b) {}
while((a = a || b)) {}
do {} while(a || b);
for(let i = 0; a || b; i += 1) {}
a || b ? true : false;


// ignoreMixedLogicalExpressions
declare let a: string | null;
declare const b: string | null;
declare const c: string | null;
declare const d: string | null;

a || (b && c);
a = a || b && c;
(a && b) || c || d;
a || (b && c) || d;
a || (b && c && d);


// ignoreBooleanCoercion
declare const a: string | true | undefined;
declare const b: string | boolean | undefined;

const x = Boolean(a || b);
