const letterPositions = function(sentence) {
  const results = {};

  for (var letter of sentence) {
    if (letter !== " ") {
      results[letter] = [];
    }
  } for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " " && results[sentence[i]]) {
      results[sentence[i]].push(i);
    }
  }
  return results;
};

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

assertArraysEqual(letterPositions("hello").l, [2, 3]);

console.log(letterPositions("hello"));