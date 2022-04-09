const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arrOne, arrTwo) {
  if (arrOne.length === arrTwo.length) {
    for (let i = 0; i < arrOne.length; i++) {
      if (arrOne[i] === arrTwo[i]) {
        //console.log(true);
      } else {
        return false;
      }
    }
    return true;
  }
};


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
/*They have the same number of keys
The value for each key in one object is the same as the value for that same key in the other object
Instruction */

const eqObjects = function(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  } for (let key in obj1) {
    if (Array.isArray(obj1[key])) {
      if (!eqArrays(obj1[key], obj2[key])) {
        return false;
      }
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};


const ab = { a: "1", b: "2"};
const ba = { b: "2", a: "1"};
eqObjects(ab, ba);
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc);
assertEqual(eqObjects(ab, abc), false)

