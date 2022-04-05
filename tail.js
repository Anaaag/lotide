const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  let result = arr.slice(1);
  return result;
};


// Test Case: Check the original array
const words = ["Hi Hi", "Hola", "Hello", "Bonjour"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 4); // original array should still have 4 elements

