
/* eslint-disable max-classes-per-file */

function Sum(a, b) {
  return a + b;
}
function hhSum(a, b) {
  return a + b;
}

// 基础类
class Person {
  // 构造函数
  constructor(name = "", job = "") {
    this.name = name;
    this.job = job;
  }

  // 介绍
  intro() {
    console.log(this.name);
    console.log(this.job);
  }
}

// 继承类
class Teacher extends Person {}
class hhStudent extends Person {}
class hhhStudent extends Person {}
class nhhStudent extends Person {}
class xxWorker extends Person {}

const num1 = Sum(1, 3);
const num2 = hhSum(1, 3);
console.log(num1, num2);

const mike = new Teacher();
mike.intro();

const Jone = Teacher();
Jone.intro();

const Ann = new hhStudent();
Ann.intro();

const Anny = new hhhStudent();
Anny.intro();

const Kim = new nhhStudent();
Kim.intro();

const Rose = new xxWorker();
Rose.intro();
