
/* eslint-disable no-unreachable */
/* eslint-disable no-constant-condition */
/* eslint-disable no-undef */


if (foo)
  foo++;

if (foo) foo++;
else foo();

if (foo)
  foo++;
else
  foo();

if (foo)
  foo++;
else
  foo();


if (foo) {
  foo++;
  foo++;
}
else {
  foo();
}


while(true) {
  doSomething();
  doSomethingElse();
}

if (!foo) {
  foo = {
    bar: baz,
    qux: foo,
  };
}

while(true) {
  if (foo)
    doSomething();
  else
    doSomethingElse();
}

if (true)
  foo++;


while(true)
  doSomething();


for(let i = 0; foo; i++)
  doSomething();


if (true) {
  // 注释
  foo++;
}

while(true) {
  // 注释
  doSomething();
}

for(let i = 0; foo; i++) {
  // 注释
  doSomething();
}
