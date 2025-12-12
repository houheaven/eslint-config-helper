
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable no-bitwise */
/* eslint-disable no-useless-concat */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-expressions */

String("123");
"123".toString();
"" + "123";
"123" + "";

Number(123);
+123;
~~123;

Boolean(true);
!!true;

BigInt(BigInt(1));

let str = "123";
str += "";
