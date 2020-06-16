function deepEqual(first, second) {
  if (first === second) {
    return true;
  }

  let firstObjectKeys = Object.keys(first);
  let secondObjectKeys = Object.keys(second);

  return (
    firstObjectKeys.length === secondObjectKeys.length &&
    firstObjectKeys.every((k) => {
      return (
        (typeof first[k] === "object" && deepEqual(first[k], second[k])) ||
        first[k] === second[k]
      );
    })
  );
}

var obj1 = {
  a: 1,
  b: 2,
  c: {
    d: "d",
  },
  e: {
    f: {
      g: {
        h: 122,
      },
      i: 34,
    },
  },
};

var obj2 = {
  a: 1,
  b: 2,
  c: {
    d: "d",
  },
  e: {
    f: {
      g: {
        h: 122,
      },
      i: 34,
    },
  },
};
console.log(deepEqual(obj1, obj2));

function flatObject(obj) {
  let result = {};

  function flatNested(obj, flatened, parent) {
    Object.keys(obj).forEach((key) => {
      if (typeof obj[key] === "object") {
        flatNested(obj[key], flatened, `${parent}${key}_`);
      } else {
        flatened[`${parent}${key}`] = obj[key];
      }
    });
  }
  flatNested(obj, result, "");
  return result;
}

console.dir(flatObject(obj2));
