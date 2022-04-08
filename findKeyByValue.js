const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};
 
//Function takes in an object and value
//Should scan object and return the first key which contains the given value
//If no key with given value is found return undefined
//Use Object.keys function to search through object keys
//For of loop to loop through the keys returned by Object.keys

const findKeyByValue = function(object, value) {
  const findkey = Object.keys(object);
  for (const key of findkey) {
    if (object[key] === value) {
      return key;
    }
  }
};



const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

// Test Cases
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Criminal Minds"), undefined);