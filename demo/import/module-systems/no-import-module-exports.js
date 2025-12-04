
/* eslint-disable no-unused-vars */
/* eslint-disable import/group-exports */
/* eslint-disable import/first */
/* eslint-disable import/no-namespace */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */

import { stuff } from "starwars";
module.exports = thing;

import * as allThings from "starwars";
exports.bar = thing;

import thing from "other-thing";
exports.foo = bar;

import thing2 from "starwars";
const baz = module.exports = thing;
console.log(baz);
