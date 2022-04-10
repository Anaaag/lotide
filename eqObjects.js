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

const eqObjects = function(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (const key in obj1) {
    if (Array.isArray(obj1[key])) {
      const keyValue1 = obj1[key];
      const keyValue2 = obj2[key];
      if (!eqArrays(keyValue1, keyValue2)) {
        return false;
      }
    }
    return true;
  }

};
