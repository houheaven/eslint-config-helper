
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable camelcase */

class X {
  private priv_prop = 123;
  protected protected_prop = 123;
  [key: string]: number;
}

const x = new X();
x["priv_prop"] = 123;
x["protected_prop"] = 123;
x["hello"] = 123;
