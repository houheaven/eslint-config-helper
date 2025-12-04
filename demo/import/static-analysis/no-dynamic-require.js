
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-nodejs-modules */

const path = require("path");
const res = require(path.resolve(__dirname, "utils-math.js"));

const dir = "../utils";
const module = "../utils/utils.js";
const math = require(`${dir}/utils-math.js`);
const math2 = require(module);
const utils = require("../utils/utils.js");
