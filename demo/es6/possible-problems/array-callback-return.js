
/* eslint-disable no-undef */
/* eslint-disable arrow-body-style */
/* eslint-disable no-useless-return */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */


const arr = [1, 2, 3, 4, 5];


/* eslint array-callback-return: ["error", { allowImplicit: false }] */

const res1 = arr.reduce((memo, item, index) => {
  memo[item] = index;
}, {});

const res2 = Array.from(arr, node => {
  if (node.tagName === "DIV") {
    return true;
  }
});

const res3 = arr.filter(x => {
  if (x) {
    return true;
  }
  else {
    
  }
});


/* eslint array-callback-return: ["error", { allowImplicit: false }] */
const undefAllTheThings = arr.map(function(item) {
  return;
});


/* eslint array-callback-return: ["error", { checkForEach: true }] */
arr.forEach(function(item) {
  return handleItem(item);
});

arr.forEach(function(item) {
  if (item < 0) {
    return x;
  }
  handleItem(item);
});

arr.forEach(item => handleItem(item));

arr.forEach(item => {
  return handleItem(item);
});
