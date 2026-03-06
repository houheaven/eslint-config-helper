
import Vue from "vue";

const res = () => import("./curly");

var single = 'single';
var double = "double";

var unescaped = 'a string containing \'double\' quotes';
var unescaped = 'a string containing "double" quotes';
var unescaped = 'a string containing `backticks`';

var double = "a string containing \"single\" quotes";
var double = "a string containing 'single' quotes";
var double = "a string containing `backtick` quotes";

var backtick = `back\ntick`;
var backtick = `back${single}tick`;
var backtick = `a string containing 'backticks'`;
var backtick = `a string containing "backticks"`;






