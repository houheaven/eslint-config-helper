
(a) => a;
a => {};
a => {'\n'};
a.map((x) => x * x);
a.map(x => {
  return x * x;
});
a.then(foo => {});

(a) => {};
(a) => {"\n"};
a => ({});
() => {};
a => a;
a.then((foo) => {});
a.then((foo) => { if (true) {} });
a((foo) => { if (true) {} });
(a, b, c) => a;
(a = 10) => a;
([a, b]) => a;
({a, b}) => a;
