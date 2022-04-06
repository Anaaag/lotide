const eqArrays = function(arrOne, arrTwo) {
  if (arrOne.length === arrTwo.length) {
    for (let i = 0; i < arrOne.length; i++) {
      if (arrOne[i] === arrTwo[i]) {
        
        } else {
          return false;
        }
      }
      return true;
    }
  }

  const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`❌❌Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  



  assertEqual(eqArrays([1, 2, 3], [1, 2, 3]))
  assertEqual(eqArrays([1, 2, 3], [3, 2, 1]))
  assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]))
  assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]))

 


  