const eqArrays = function(actual, expected) {
  for (let a = 0; a < actual.length; a++) {
    if (actual[a] !== actual[a]) {
      return false;
    }
  } return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const middle = function(array) {
  let output = []
  if (array.length <= 2) {
    output = [];
  } else if (array.length % 2 === 0) {
    output.push(array[(array.length / 2) - 1])
    output.push(array[(array.length / 2)]);
  } else if (array.length % 2 === 1) {
    output.push(array[(array.length - 1) / 2]);
  } return output;
};

middle([1]) // => []
middle([1, 2]) // => []
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);