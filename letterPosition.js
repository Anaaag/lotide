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


const assertArraysEqual = function(arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo)) {
    console.log(`✅✅Assertion Passed: ${arrOne} === ${arrTwo}`);
  } else {
    console.log(`❌❌Assertion Failed: ${arrOne} !== ${arrTwo}`);
  }
};

// Return all the indices in the string where each character is found
/*For each letter in your results object, create an array if one is not already there,
before trying to push new numbers into them.
Do not create a new array without checking if one is already there, otherwise you will always end up with an array of one element!
*/

const letterPositions = function(string) {
  const results = {};
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " ") {
      if (results[string[i]]) {
        results[string[i]].push(i);
      } else {
        results[string[i]] = [i];
      }
    }
  }
  return results;
};

console.log(letterPositions("cat in hat"));



assertArraysEqual(letterPositions("cat in hat").c, [0]);
assertArraysEqual(letterPositions("cat in hat").h, [7]);
assertArraysEqual(letterPositions("cat in hat").i, [4]);
assertArraysEqual(letterPositions("cat in hat").n, [5]);