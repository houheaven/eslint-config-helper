
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-return-assign */
/* eslint-disable no-confusing-arrow */
/* eslint-disable no-unused-expressions */


/* eslint @stylistic/no-extra-parens: ["warn", "all", { "returnAssign": true }] */

function a(b) {
  return (b = 1);
}

function a2(b) {
  return b ? (c = d) : (c = e);
}

b => (b = 1);

b => b ? (c = d) : (c = e);
