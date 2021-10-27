const eqObjects = function(object1, object2) {
  const arrayObject1 = Object.keys(object1);
  const arrayObject2 = Object.keys(object2);
  if (arrayObject1.length !== arrayObject2.length) {
    return false;
  } else {
    for (let arr1 of arrayObject1) {
      let newArray1 = object1[arr1];
      let newArray2 = object2[arr1];
      if (Array.isArray(newArray1) && Array.isArray(newArray2)) {
        return eqArrays(newArray1, newArray2);
      } else {
        if (newArray1 !== newArray2) {
          return false;
        }
      }
    } return true;
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    } return true;
  }
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Passed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


assertObjectsEqual({a: 12, b: "3"}, {b: "3", a: 1});