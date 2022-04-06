const assertArraysEqual = function(arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo)) {
    console.log(`✅✅Assertion Passed: ${arrOne} === ${arrTwo}`);
  } else {
    console.log(`❌❌Assertion Failed: ${arrOne} !== ${arrTwo}`);
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

//Should return a new array with only those elements from source not present in itemsToRemove


const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++){
    for(let j = 0; j < source[i].length; j++){
      if(source[i] !== itemsToRemove[j]){
        newArray.push(source[i])
      }
    }

  }
  return newArray;
}
console.log(without([1, 2, 3], [1]))
without([1, 2, 3], [1])


//Should return a new array with only those elements from source not present in itemsToRemove
const without = function(source, itemsToRemove) {
  let newArray = []; 
  // creating an empty array that will contain our new array with elements from source not present in itemsToRemove array
  for(let i = 0; i < source.length; i++){ 
  // loop through arrays 
    if(source[i] !== itemsToRemove[i]) 
  // checking if source elements are not equal to elements in itemsToRemove 
    newArray.push(source[i]) 
  // pushing elements from source array not found in itemsToRemove 
  }
  return newArray;
}

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]




