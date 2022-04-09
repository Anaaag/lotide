
//will take in an array and return the middle-most element(s) of the given array
//return an array with only middle element(s)
//for arrays with one or two elements return empty
//for arrays with odd number of elements return single middle element
//for arrays with even number of elements return two elements in the middle

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


const middle = function(arrOne) {
  let midElement = [];
  if (arrOne.length === 1 || arrOne.length === 2) {
    midElement = [];
  } else if (arrOne.length % 2 === 1) {
    midElement.push(arrOne[Math.floor(arrOne.length / 2)]);
  } else if (arrOne.length % 2 === 0) {
    midElement.push(arrOne[arrOne.length / 2 - 1], arrOne[arrOne.length / 2]);
    
  }
  return midElement;
};

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2, 3,]), [2]);
assertArraysEqual(middle([1, 2, 3, 4,]), [2, 3]);






