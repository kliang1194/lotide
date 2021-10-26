const eqArrays = function(arr1, arr2) {
  for (let a = 0; a < arr1.length; a++) {
      if (arr1[a] !== arr2[a]) {
        return false;
      }
    } return true;
  } 

  const assertArraysEqual = function (arr1, arr2) {
    if(eqArrays(arr1, arr2)) {
      return console.log(`✅✅✅ Assertion Paased: ${arr1} === ${arr2}`);
    } else {
      return console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
    };
  }

assertArraysEqual([1, 2, 3], [1, "1", 3]);