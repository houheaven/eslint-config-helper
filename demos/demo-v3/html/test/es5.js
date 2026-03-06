
// 测试场景
// html 模式下，是否支持 js 文件（ES5）

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
