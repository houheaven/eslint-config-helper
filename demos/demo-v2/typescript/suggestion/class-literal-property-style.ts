
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable accessor-pairs */
/* eslint-disable no-useless-computed-key */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-private-class-members */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

class Mx {
  public static get myField1() {
    return 1;
  }

  private get ["myField2"]() {
    return "hello world";
  }
}
