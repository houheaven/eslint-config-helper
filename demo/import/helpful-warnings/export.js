
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-rest-params */
/* eslint-disable import/exports-last */

// 默认导出时重复
export default class MyClass { /* ... */ } // Multiple default exports.

function makeClass() { return new MyClass(...arguments); }
// export default makeClass // Multiple default exports.


// 命名导出时重复
export const foo = function() { /* ... */ }; // Multiple exports of name 'foo'.

function bar() { /* ... */ }
// export { bar as foo } // Multiple exports of name 'foo'.
