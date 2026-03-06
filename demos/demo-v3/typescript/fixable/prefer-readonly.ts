
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/parameter-properties */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

class Container {
  // These member variables could be marked as readonly
  private neverModifiedMember = true;
  private onlyModifiedInConstructor: number;
  #neverModifiedPrivateField = 3;

  public constructor(
    onlyModifiedInConstructor: number,
    // Private parameter properties can also be marked as readonly
    private neverModifiedParameter: string
  ) {
    this.onlyModifiedInConstructor = onlyModifiedInConstructor;
  }
  
  private onClick = () => {
    /* ... */
  };
}
