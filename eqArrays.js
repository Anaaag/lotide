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

module.exports = eqArrays;


 
  



  