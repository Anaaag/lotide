
const middle = require('../middle');
const assertArraysEqual = require('../assertEqual');


assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2, 3,]), [2]);
assertArraysEqual(middle([1, 2, 3, 4,]), [2, 3]);

