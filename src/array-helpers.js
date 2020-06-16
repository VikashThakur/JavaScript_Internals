//Create a flat function to flatten the nested arrays
//console.log([1, 2, [3, [4, [5]], 6], 7].flat());
//-> return [1, 2, 3, 4, 5, 6]
Array.prototype.flat = function () {
  var arr = this;
  function flatNested(elems) {
    return elems.reduce((acc, curr) => {
      if (Array.isArray(curr)) {
        acc = [...acc, ...flatNested(curr)];
      } else {
        acc.push(curr);
      }
      return acc;
    }, []);
  }
  return flatNested(arr);
};

console.log([1, 2, [3, [4, [5]], 6], 7].flat());
