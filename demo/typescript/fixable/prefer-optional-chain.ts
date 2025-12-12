
// @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错

/* eslint-disable no-undefined */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */

foo && foo.a && foo.a.b && foo.a.b.c;
foo && foo["a"] && foo["a"].b && foo["a"].b.c;
foo && foo.a && foo.a.b && foo.a.b.method && foo.a.b.method();

// With empty objects
(((foo || {}).a || {}).b || {}).c;
(((foo || {})["a"] || {}).b || {}).c;

// With negated `or`s
!foo || !foo.bar;
!foo || !foo[bar];
!foo || !foo.bar || !foo.bar.baz || !foo.bar.baz();

// this rule also supports converting chained strict nullish checks:
foo.a !== null && foo.a !== undefined && foo.a.b;
