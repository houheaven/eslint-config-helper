
import utils from "@houheaven/eslint-config-helper-core";
import es5 from "./lib/javascript-es5.js";
import es6 from "./lib/javascript-es6.js";
import typescript from "./lib/typescript.js";
import html from "./lib/html.js";
import vue2 from "./lib/vue2.js";
import vue3 from "./lib/vue3.js";
import react from "./lib/react.js";

export default {
  configs: {
    ...es5.configs,
    ...es6.configs,
    ...typescript.configs,
    ...html.configs,
    ...vue2.configs,
    ...vue3.configs,
    ...react.configs,
  },
  supports: {
    ...es5.supports,
    ...es6.supports,
    ...typescript.supports,
    ...html.supports,
    ...vue2.supports,
    ...vue3.supports,
    ...react.supports,
  },
  utils,
};
