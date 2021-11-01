const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const result1 = map(words, item => item[0]);
console.log(result1);

const eqArrays = function(arr1, arr2) {
  for (let a = 0; a < arr1.length; a++) {
    if (arr1[a] !== arr2[a]) {
      return false;
    }
  } return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    return console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

console.log(assertArraysEqual(result1, ['g', 'c', 't', 'm', 't']));

module.exports = map;