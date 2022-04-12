const assertArraysEqual = require('./assertArraysEqual');



const middle = function(arrOne) {
  let midElement = [];
  if (arrOne.length === 1 || arrOne.length === 2) {
    midElement = [];
  } else if (arrOne.length % 2 === 1) {
    midElement.push(arrOne[Math.floor(arrOne.length / 2)]);
  } else if (arrOne.length % 2 === 0) {
    midElement.push(arrOne[arrOne.length / 2 - 1], arrOne[arrOne.length / 2]);

  }
  return midElement;
};



module.exports = middle;







