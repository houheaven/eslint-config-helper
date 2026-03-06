
/* eslint-disable no-undef */

switch(foo) {
  case 1:
    doSomething();
  case 2:
    doSomethingElse();
}

/* eslint no-fallthrough: ["error", { "allowEmptyCase": true }] */
switch(foo) {
  case 1:
  case 2: doSomething();
}

switch(foo) {
  /* Put a message here */
  case 1:
  // Put a message here
  case 2: doSomething();
}
