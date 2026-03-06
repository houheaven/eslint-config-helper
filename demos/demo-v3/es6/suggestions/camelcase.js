
/* eslint-disable import/first */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-namespace */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */

/* global my_favorite_color */


/* 规则 camelcase: "error" */
window.aa_hello = "hello";
const my_favorite_color = "#112C85";


/* 规则 camelcase: ["warn", {properties: "always"}] */
const obj = {
  my_pref: 1,
  myPref: 1,
};
obj.my_pref = 2;
obj.myPref = 2;


/* 规则 camelcase: ["error", {ignoreDestructuring: false}] */

const { category_id: category_alias } = query;
const { category_id2, ...other_props } = query;


/* 规则 camelcase: ["error", {ignoreImports: false}] */
import { snake_cased } from "mod";
import default_import from "mod";
import * as namespaced_import from "mod";


/* 规则 camelcase: ["error", {allow: ["^UNSAFE_", "test_componentWillMount"]}] */

function UNSAFE_componentWillMount2() {}
function test_componentWillMount() {}
function test_componentWill2() {}
