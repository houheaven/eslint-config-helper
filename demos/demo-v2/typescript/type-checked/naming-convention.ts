
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable camelcase */
/* eslint-disable prefer-const */
/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-extraneous-class */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-private-class-members */

// 变量命名
let varNum2 = 1000;
let CONST_NUM2 = 1000;
let var_num2 = 1000;
let varNUm2 = 1000;

const varNum = 1000;
const CONST_NUM = 1000;
const var_num = 1000;
const varNUm = 1000;

const isActive = true;
const isactive = true;
const is_active = true;

const { isActive } = ObjectData;
const { is_active } = ObjectData;
const { isActive: isActive2 } = ObjectData;
const { is_active: isActive2 } = ObjectData;

// 对象属性命名
const obj = {
  name: "houheaven",
  userInfo: "hello",
  var_num: 10,
  func_num: 666,
  _active: true,
};

// 函数命名
function funcName(): void {
  console.log("hello");
}
function func_num(): void {
  console.log("hello");
}
function ComponentFunc(): void {
  console.log("hello");
}
function funcName2(name: string, user_id: number, userAge: number, _err: Error): void {
  console.log("hello");
}

// 类名
class hhPanel {}
class UserInfoClass {}
class userService {}
class user {}
class user_service {}

class UserProfileClass {
  name: string;
  name2: string;
  nameStr2: string;
  name_addr: string;
  private name_str: string;
  private nameStr: string;
  private _nameStr: string;
  constructor(name: string) {
    this.name = name;
    this.name2 = name;
    this.name_str = name;
    this._nameStr = name;
  }
}


// 接口
interface UserInfo {
  name: string;
  age: number;
}
interface IxUser {
  name: string;
  age: number;
}
interface IUser {
  name: string;
  age: number;
}


// 枚举
enum UserType {
  Admin = "admin",
  Normal = "normal",
}
enum user {
  Admin = "admin",
  Normal = "normal",
}
