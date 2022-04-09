const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(ab, ba) {
  if(Object.keys(ab).length !== Object.keys(ba).length){
    
  }

};


const ab = { a: "1", b: "2"};
const ba = { b: "2", a: "1"};
eqObjects(ab, ba);

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); 

assertEqual(eqObjects(ab, ba));
assertEqual(eqObjects(ab, abc));

/*They have the same number of keys
The value for each key in one object is the same as the value for that same key in the other object
Instruction */
