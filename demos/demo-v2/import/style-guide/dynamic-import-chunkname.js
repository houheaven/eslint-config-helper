
/* eslint-disable spaced-comment */
/* eslint-disable import/no-unresolved */

// no leading comment
import("someModule");

// incorrectly formatted comment
import(/*webpackChunkName:"someModule"*/ "someModule");
import(/* webpackChunkName : "someModule" */ "someModule");

// chunkname contains a 6 (forbidden by rule config)
import(
  /* webpackChunkName: "someModule6" */
  "someModule"
);

// invalid syntax for webpack comment
import(
  /* totally not webpackChunkName: "someModule" */
  "someModule"
);

// single-line comment, not a block-style comment
import(
  // webpackChunkName: "someModule"
  "someModule"
);

// 正确导入
import(/* webpackChunkName: "someModule" */ "someModule");
import(/* webpackChunkName: "someOtherModule12345789" */ "someModule");
import(
  /* webpackChunkName: "someModule" */
  /* webpackPrefetch: true */
  "someModule"
);
import(
  /* webpackChunkName: "someModule", webpackPrefetch: true */
  "someModule"
);

// using single quotes instead of double quotes
import(
  /* webpackChunkName: "someModule" */
  "someModule"
);
