
function sum(...nums) {
  const res = nums.reduce((prev, next) => prev += next);
  console.log(`求和：${nums.join(" + ")} = ${res}`);
  return res;
}

function minus(...nums) {
  const res = nums.reduce((prev, next) => prev -= next);
  console.log(`求差：${nums.join(" - ")} = ${res}`);
  return res;
}

export {
  sum,
  minus,
};
