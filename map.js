// map function will take in two arguments
// 1. an array to map 2. a callback function
//map function will return a new array



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


const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1, 2, 3, 4];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
    console.log("item BEFORE: ", item);
    console.log("item AFTER: ", callback(item));
    console.log("---");
  }
  return results;
};

const results = map(words, word => word[0]);
//console.log(results);


//Tests
assertArraysEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"]);
assertArraysEqual(map(numbers, n => n * 2),[2,4,6,8]);
assertArraysEqual(map(words, word => word.length), [6, 7, 2, 5, 3]);


module.exports = map; 
