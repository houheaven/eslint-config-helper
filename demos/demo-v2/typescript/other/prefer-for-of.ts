
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

declare const array: string[];

for(let i = 0; i < array.length; i++) {
  // i is used, so for-of could not be used.
  console.log(i, array[i]);
}

for(let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

for(const x of array) {
  console.log(x);
}
