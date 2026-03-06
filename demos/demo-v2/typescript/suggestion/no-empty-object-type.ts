
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-unused-vars */

interface Base1 {
  value: boolean;
}

interface Base2 {
  value: boolean;
}

interface Derived1 extends Base1 {}
interface Derived2 extends Base2 {}
interface Derived3 extends Base1, Base2 {}
