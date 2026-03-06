
// 规则: quotes
// 等级: warn

var str = 'hello world';
var num = 233;

str = 'hello eslint';

console.log(str);
console.log(num);


// rule: no-fallthrough
// level: error

switch(foo) {
  case 1:
    doSomething();
  case 2:
    doSomethingElse();
}
