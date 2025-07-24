
/* eslint-disable quotes */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */


/* eslint no-extra-parens: ["warn", "all", { "allowParensAfterCommentPattern": "" }] */
const span = /* @type {HTMLSpanElement} */(event.currentTarget);
if (/* @type {Foo | Bar} */(options).baz) console.log('Lint free');
foo(/* @type {Bar} */ (bar), options, {
  name: "name",
  path: "path",
});
if (foo) {
  /** @type {Bar} */
  (bar).prop = false;
}
