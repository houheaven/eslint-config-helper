
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-multi-assign */
/* eslint-disable no-use-before-define */
/* eslint-disable import/first */
/* eslint-disable import/no-namespace */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/group-exports */

import { stuff } from "starwars";
module.exports = thing;

import * as allThings from "starwars";
exports.bar = thing;

import thing from "other-thing";
exports.foo = bar;

import thing2 from "starwars";
const baz = module.exports = thing;
console.log(baz);
