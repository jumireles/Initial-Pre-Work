//Learned that === is a strict equality operator which tests to see if values are the same
//this tests to make sure the types are the same as well as the values and if they are both the same
//it returns as true if not false.
// Setup
function testStrict(val) {
  if (val===7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testStrict(10);
