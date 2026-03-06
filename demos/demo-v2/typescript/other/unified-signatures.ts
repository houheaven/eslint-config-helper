
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable @typescript-eslint/no-unused-vars */

function f(...a: number[]): void;
function f(...a: string[]): void;

function x(x: number | string): void;
function x(x: number): void;
function x(x: string): void;

function y(): void;
function y(...x: number[]): void;
