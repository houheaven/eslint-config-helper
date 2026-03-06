
/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-return */
/* eslint-disable consistent-return */
/* eslint-disable prefer-arrow-callback */

/* eslint array-callback-return: ["error", { allowImplicit: false }] */

const arr = [1, 2, 3, 4, 5];


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

const undefAllTheThings = arr.map(function(item) {
  return;
});
