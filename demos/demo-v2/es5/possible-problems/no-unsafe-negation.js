
/* eslint-disable no-undef */
/* eslint-disable no-empty */
/* eslint-disable no-extra-parens */

// ✅ 正确示例
if (!(key in object)) {
  // key is not in object
}

if (!(obj instanceof Ctor)) {
  // obj is not an instance of Ctor
}

// ❌ 错误示例
if (!key in object) {
  // operator precedence makes it equivalent to (!key) in object
  // and type conversion makes it equivalent to (key ? "false" : "true") in object
}

if (!obj instanceof Ctor) {
  // operator precedence makes it equivalent to (!obj) instanceof Ctor
  // and it equivalent to always false since boolean values are not objects.
}


/* eslint no-unsafe-negation: ["error", { "enforceForOrderingRelations": true }] */

if ((!a) < b) {}
if (!a < b) {}

while(!a > b) {}

foo = !a <= b;

foo = !a >= b;
