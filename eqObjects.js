const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);
const abc = { a: "1", b: "2", c: "3" }; // => true
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc),true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2),false);

module.exports = eqObjects;