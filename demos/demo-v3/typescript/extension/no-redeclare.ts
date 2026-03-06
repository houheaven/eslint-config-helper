
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable import/group-exports */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-extraneous-class */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

const x = 1;
const x = 2;

interface A {
  prop1: 1;
}
interface A {
  prop2: 2;
}

namespace Foo {
  export const a = 1;
}
namespace Foo {
  export const b = 2;
}

class Bar {}
namespace Bar {}

function Baz() {}
namespace Baz {}
