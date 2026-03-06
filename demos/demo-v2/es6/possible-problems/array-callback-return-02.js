
/* eslint-disable no-undef */
/* eslint-disable arrow-body-style */
/* eslint-disable consistent-return */
/* eslint-disable prefer-arrow-callback */

/* eslint array-callback-return: ["error", { checkForEach: true }] */

const arr = [1, 2, 3, 4, 5];

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
