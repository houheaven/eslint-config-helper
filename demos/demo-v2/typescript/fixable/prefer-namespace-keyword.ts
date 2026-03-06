
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable import/group-exports */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/method-signature-style */

// Demo 1: 使用 module 关键字 - 触发 prefer-namespace-keyword
module MyModule { // ❌ 应该使用 namespace 而不是 module
  export interface User {
    name: string;
    age: number;
  }
  
  export function greet(user: User): string {
    return `Hello, ${user.name}!`;
  }
}

// Demo 2: 嵌套 module 声明
module OuterModule { // ❌ 应该使用 namespace 而不是 module
  export const version = "1.0.0";
  
  module InnerModule { // ❌ 应该使用 namespace 而不是 module
    export interface Config {
      debug: boolean;
      timeout: number;
    }
  }
}

// Demo 3: module 与命名空间导出
module DataModule { // ❌ 应该使用 namespace 而不是 module
  export namespace Models {
    export interface Product {
      id: number;
      title: string;
    }
  }
  
  export module Utils { // ❌ 应该使用 namespace 而不是 module
    export function formatDate(date: Date): string {
      return date.toISOString();
    }
  }
}

// Demo 4: 复杂的 module 结构
module Application { // ❌ 应该使用 namespace 而不是 module
  export module Core { // ❌ 应该使用 namespace 而不是 module
    export interface Service {
      init(): void;
      destroy(): void;
    }
  }
  
  export module Features { // ❌ 应该使用 namespace 而不是 module
    export module Auth { // ❌ 应该使用 namespace 而不是 module
      export interface User {
        id: string;
        email: string;
      }
    }
  }
}

// Demo 5: 正确的 namespace 使用（对比示例）
namespace CorrectNamespace { // ✅ 正确使用 namespace 关键字
  export interface User {
    name: string;
    age: number;
  }
  
  export function greet(user: User): string {
    return `Hello, ${user.name}!`;
  }
}

// Demo 6: 嵌套 namespace 结构
namespace OuterNamespace { // ✅ 正确使用 namespace 关键字
  export const version = "1.0.0";
  
  namespace InnerNamespace { // ✅ 正确使用 namespace 关键字
    export interface Config {
      debug: boolean;
      timeout: number;
    }
  }
}

// Demo 7: 混合 module 和 namespace（部分错误）
module MixedExample { // ❌ 应该使用 namespace 而不是 module
  export namespace Models { // ✅ namespace 使用正确
    export interface Product {
      id: number;
      title: string;
    }
  }
  
  export module Utils { // ❌ 应该使用 namespace 而不是 module
    export function formatDate(date: Date): string {
      return date.toISOString();
    }
  }
}

// Demo 8: 在全局作用域中使用 module
module GlobalModule { // ❌ 应该使用 namespace 而不是 module
  export const GLOBAL_CONFIG = {
    apiUrl: "https://api.example.com",
    timeout: 5000,
  };
}

// Demo 9: 深层次的 module 嵌套
module Deep { // ❌ 应该使用 namespace 而不是 module
  export module Level1 { // ❌ 应该使用 namespace 而不是 module
    export module Level2 { // ❌ 应该使用 namespace 而不是 module
      export module Level3 { // ❌ 应该使用 namespace 而不是 module
        export interface DeepInterface {
          value: string;
        }
      }
    }
  }
}

// Demo 10: module 与类、接口的组合
module EntityModule { // ❌ 应该使用 namespace 而不是 module
  export abstract class BaseEntity {
    abstract id: string;
  }
  
  export interface Timestamped {
    createdAt: Date;
    updatedAt: Date;
  }
  
  export module Helpers { // ❌ 应该使用 namespace 而不是 module
    export function generateId(): string {
      return Math.random().toString(36).substr(2, 9);
    }
  }
}
