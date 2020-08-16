function add(input) {
  var result = input;
  console.log(` Outer - ${input}`);
  return function adder(innerInput) {
    console.log(`Inner - ${innerInput}`);
    if (innerInput === undefined) {
      return result;
    }
    result += innerInput;
    return adder;
  };
}

var fn1 = add(1);

console.log(add(1)(2)(3)(4)(5)(6)());
