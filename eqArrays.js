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




 
  

console.log("✅✅: ",eqArrays([1, 2, 3], [1, 2, 3]));
console.log("❌❌: ",eqArrays([1, 2, 3], [3, 2, 1]));
console.log("✅✅: ",eqArrays(["1", "2", "3"], ["1", "2", "3"]));
console.log("❌❌: ",eqArrays(["1", "2", "3"], ["1", "2", 3]));


  