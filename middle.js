
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



middle([1]) // => []
middle([1, 2]) // => []
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]


const middle = function(array) {
  let newArray = [];
  let middleElement = array[Math.floor(array.length/2)];
  newArray.push(middleElement)
  return newArray;
  }
//Odd

const middle = function(array) {
  let newArray = [];
  let middleElement = array[Math.floor(array.length / 2) 
  newArray.push(middleElement
  return newArray;
}
//even

// one or two elements
let newArray = [];
if (array.length === 1 || array.length === 2) {
  return newArray;
}