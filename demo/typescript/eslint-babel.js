
// ====================================================

var xx = 66666;

// Babel 支持的 ES 新特性

function dec(id) {
  console.log("evaluated", id);
  return (target, property, descriptor) => console.log("executed", id);
}

class Example {
  @dec(1)
  @dec(2)
  method() {}
}

export default new Example();

// ====================================================
