
/* eslint-disable no-undef */

function foo()
{
  return true;
}

if (foo)
{
  bar();
}

try
{
  somethingRisky();
} catch(e)
{
  handleError();
}

// class C
// {
//     static
//         {
//         foo();
//     }
// }

if (foo) {
  bar();
} else {
  baz();
}
