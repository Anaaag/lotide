const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  let result = {};
  for (const value of sentence) {
    if(result[value]) {
      result[value] += 1
    } else {
      result[value] = 1
    }
    console.log(value)
  }
  return result; 
}
countLetters("lighthouse in the house");

// Function should take in a sentence ("string")
//Return a count of each of the letterss in that sentence
