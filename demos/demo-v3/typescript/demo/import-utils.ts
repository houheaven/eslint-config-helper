
/* eslint-disable no-return-assign */

function greet(name = "陌生人"): void {
  console.log(`你好，${name} ~`);
}

function sum(...nums: number[]): number {
  const res = nums.reduce((prev, next) => prev += next);
  console.log(`求和：${nums.join(" + ")} = ${res}`);
  return res;
}

function minus(...nums: number[]): number {
  const res = nums.reduce((prev, next) => prev -= next);
  console.log(`求差：${nums.join(" - ")} = ${res}`);
  return res;
}

export {
  sum,
  minus,
};

export default greet;
