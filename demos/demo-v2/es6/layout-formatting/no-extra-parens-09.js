
/* eslint-disable wrap-iife */
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
/* eslint-disable space-before-function-paren */


/* eslint @stylistic/no-extra-parens: ["warn", "all", { "enforceForFunctionPrototypeMethods": true }] */

const foo = (function () {}).call();

const bar = (function () {}).apply();

const baz = (function () {}.call());

const quux = (function () {}.apply());
