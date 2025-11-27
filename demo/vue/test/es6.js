
// 规则: import/no-empty-named-blocks
// 等级: warn

import {} from "mod";
import Default, {} from "mod";


// 规则: no-var
// 等级: warn

var str = "hello world";
var num = 233;

str = "hello eslint";

console.log(str);
console.log(num);


// 规则: camelcase
// 等级: error

const func = () => {
  const { category_id: category_alias } = query;
  const { category_id2, ...other_props } = query;
  console.log("hello world");
};
