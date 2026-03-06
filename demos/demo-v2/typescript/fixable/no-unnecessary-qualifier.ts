
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable @typescript-eslint/no-type-alias */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-literal-enum-member */
/* eslint-disable @typescript-eslint/prefer-enum-initializers */

enum A {
  C,
  D = A.C,
}

namespace X {
  export type B = number;
  const x: X.B = 3;
}
