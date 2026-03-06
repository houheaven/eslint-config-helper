
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable no-undefined */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-misused-spread */
/* eslint-disable @typescript-eslint/no-unsafe-type-assertion */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* eslint-disable @typescript-eslint/consistent-type-definitions */

// ==========================================================================================

// 错误：使用类型别名定义基础类型
type Name = string;
type Age = number;

const name: Name = "Alice";
const age: Age = 30;

// ==========================================================================================

// 错误：使用类型别名定义对象结构
type User = {
  id: number;
  name: string;
  email?: string;
};

function createUser(user: User): User {
  return user;
}

// 正确：使用接口定义对象结构
interface User2 {
  id: number;
  name: string;
  email?: string;
}

function createUser2(user: User2): User2 {
  return user;
}

// ==========================================================================================

// 错误：使用类型别名定义联合类型
type Status = "active" | "inactive" | "pending";

function setStatus(status: Status): void {
  console.log(`Status: ${status}`);
}

// 正确：使用枚举或字面量类型（根据场景选择）
enum Status2 {
  Active = "active",
  Inactive = "inactive",
  Pending = "pending"
}

function setStatus2(status: Status2): void {
  console.log(`Status: ${status}`);
}

// ==========================================================================================

// 错误：使用类型别名定义泛型
type ApiResponse<T> = {
  data: T;
  success: boolean;
};

function fetchData<T>(url: string): ApiResponse<T> {
  // 模拟请求
  return { data: {} as T, success: true };
}

// 正确：使用接口定义泛型结构
interface ApiResponse2<T> {
  data: T;
  success: boolean;
}

function fetchData2<T>(url: string): ApiResponse2<T> {
  // 模拟请求
  return { data: {} as T, success: true };
}

// ==========================================================================================

// 正确：使用接口组合而非类型别名
interface Person {
  name: string;
  age: number;
}

interface Employee {
  employeeId: number;
  department: string;
}

type Employee2 = Person & Employee;

// 使用交叉类型替代类型别名
function createEmployee(person: Employee2): Employee2 {
  return { ...person };
}

// ==========================================================================================

// 使用别名定义函数类型
type ClickHandler = (e: MouseEvent, data: string) => void;

// 使用接口定义函数类型
interface ClickHandler2 {
  // eslint-disable-next-line @typescript-eslint/prefer-function-type
  (e: MouseEvent, data: string): void;
}

const handleClick: ClickHandler = (e, data) => {
  data = "world";
  e.preventDefault();
  console.log("Click event:", e, e.clientX);
  // 为何没有报错？
  return e.bubbles;
};

const handleClick2: ClickHandler2 = (e, data) => {
  data = "hello";
  e.preventDefault();
  console.log("Click event:", e, e.clientX, data);
  // 为何没有报错？
  return e.bubbles;
};

// element.addEventListener('click', (e: ClickHandler) => void);
// element.addEventListener('click', (e: ClickHandler2) => void);

// ==========================================================================================

// 配置允许条件类型
type NonNullable2<T> = T extends null | undefined ? never : T; // ✅ 允许

// 替代方案（禁用条件类型别名，使用条件类型内联）‌：
// 由于条件类型通常用于泛型，无法用接口替代，通常只能内联使用：

function ensureNonNull<T>(value: T): T extends null | undefined ? never : T {
  if (value === null) throw new Error("Value must not be null");
  if (value === undefined) throw new Error("Value must not be undefined");
  return value;
}

// ==========================================================================================

// 配置允许构造函数类型别名

// 配置: { "allowConstructors": "always" }
type Constructor = new (...args: any[]) => object; // ✅ 允许

interface Constructor2 {
  // eslint-disable-next-line @typescript-eslint/prefer-function-type
  new (...args: any[]): object;
}

// ==========================================================================================

// 配置: { "allowMappedTypes": "always" }
type ReadonlyUser = Readonly<Users>; // ✅ 允许

// ==========================================================================================

// 配置: { "allowTupleTypes": "always" }
type Point = [number, number]; // ✅ 允许

// ==========================================================================================

// 配置: { "allowGenerics": "always" }
type Response<T> = {
  data: T;
  status: number;
};

interface Response2<T> {
  data: T;
  status: number;
}

// ==========================================================================================
