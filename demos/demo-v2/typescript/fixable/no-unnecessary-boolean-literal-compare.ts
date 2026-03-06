
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

// allowComparingNullableBooleansToTrue
declare const someUndefinedCondition: boolean | undefined;
if (someUndefinedCondition === true) {    // 不省略 === true
  if (someUndefinedCondition) {           // 省略 === true
    console.log("--");
  }
}

declare const someNullCondition: boolean | null;
if (someNullCondition !== true) {         // 不省略 !== true
  if (someNullCondition) {                // 省略 !== true
    console.log("--");
  }
}

// allowComparingNullableBooleansToFalse
declare const someUndefinedCondition2: boolean | undefined;
if (someUndefinedCondition2 === false) {  // 不省略 === false
  if (!someUndefinedCondition2) {         // 省略 === false
    console.log("--");
  }
}

declare const someNullCondition2: boolean | null;
if (someNullCondition2 !== false) {      // 不省略 !== false
  if (!someNullCondition2) {             // 省略 !== false
    console.log("--");
  }
}
