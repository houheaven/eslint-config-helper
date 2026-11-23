
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */


/* eslint @stylistic/no-extra-parens: ["warn", "all", { "ternaryOperandBinaryExpressions": true }] */

(a && b) ? foo : bar;

(a - b > a) ? foo : bar;

foo ? (bar || baz) : qux;

foo ? bar : (baz || qux);
