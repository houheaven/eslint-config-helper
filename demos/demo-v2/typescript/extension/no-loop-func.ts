
/* eslint-disable no-var */
/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/prefer-for-of */

// Demo 1: 在循环中创建函数，导致函数在每次迭代中都被重新创建
for(var i = 0; i < 10; i++) {
  // 这个函数会在每次循环时重新创建，可能导致性能问题
  setTimeout(() => {
    console.log(i);
  }, 100);
}

// Demo 2: 在循环中创建箭头函数，同样会导致函数重复创建
const items = [1, 2, 3, 4, 5];
const functions = [];

for(let j = 0; j < items.length; j++) {
  // 这个箭头函数在每次迭代中都会被重新创建
  functions.push(() => {
    return items[j] * 2;
  });
}
