
/* eslint-disable no-redeclare */
/* eslint-disable block-scoped-var */

for(var i = 0; i < 10; i--) {
  console.log(i);
}

for(var i = 10; i >= 0; i++) {
  console.log(i);
}

for(var i = 0; i > 10; i++) {
  console.log(i);
}

var n = -2;
for(var i = 0; i < 10; i += n) {
  console.log(i);
}
