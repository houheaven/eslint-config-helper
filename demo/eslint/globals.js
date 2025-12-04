
// 案例 1
// 直接使用 $ 会报错
// console.log($);

// 案例 2
// 定义了全局变量
// 值为 true，可以直接使用，也可以修改
// 值为 false，可以直接使用，但不可以修改

// .eslintrc.js
// module.exports = {
//     globals: {
//         '$': true,
//         globalsCustomVar1: true,
//         globalsCustomVar2: "writable",  // 旧值：true
//         globalsCustomVar3: "readonly",  // 旧值：false、readable
//         Promise: "off",
//     }
// }

console.log($);
$ = 'jQuery';
console.log($);


/* global globalsBoo1:writable */
/* global globalsBoo2 */
globalsBoo1 = 11;
globalsBoo2 = 22;
console.log(globalsBoo1);
console.log(globalsBoo2);
console.log(globalsBoo3);

globalsCustomVar1 = 111;
globalsCustomVar2 = 112;
globalsCustomVar3 = 113;
console.log(globalsCustomVar1);
console.log(globalsCustomVar2);
console.log(globalsCustomVar3);
console.log(globalsCustomVar4);

new Promise(resolve => {
  resolve(6666);
});

Promise.reject(() => {
  return '233333';
});

