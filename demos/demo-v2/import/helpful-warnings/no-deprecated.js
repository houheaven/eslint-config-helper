
import { multiply, multiply2 } from "../utils/deprecated.js";

function foo(y, z) {
  return multiply(y, z);
}

function boo(y, z) {
  return multiply2(y, z);
}

export {
  foo,
  boo,
};
