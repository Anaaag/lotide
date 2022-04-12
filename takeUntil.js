//function will take in two parameters
//1.The array to work with 2. the callback (predicate)
//Return a slice of the array with elements taken from the beginning

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


const takeUntil = function(array, callback) {
  let results = [];
  for (let element of array) {
    if (callback(element)) {
      return results;
    }
    results.push(element);
  }
  return results;
};

const numbers = [2, 5, 12, 22];
const results1 = takeUntil(numbers, x => x > 10);
console.log(results1);

const listOfFriends = ['ana', 'kait', 'jenna', 'serena', 'emma'];
const results3  = takeUntil(listOfFriends, x => x === 'jenna');
console.log(results3);

const numbers2 = [2, 8, 11, 15, 16];
const results2 = takeUntil(numbers2, x => x % 2 === 1);
console.log(results2);

//Test Cases
assertArraysEqual(takeUntil(numbers, x =>  x > 10), [2, 5]);
assertArraysEqual(takeUntil(listOfFriends, x => x === 'jenna'), ['ana', 'kait']);
assertArraysEqual(takeUntil(numbers2, x => x % 2 === 1), [2, 8]);

module.exports = takeUntil;