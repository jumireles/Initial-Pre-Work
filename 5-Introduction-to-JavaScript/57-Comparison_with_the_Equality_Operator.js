//Learned how to use an equality operator which tests if a value is equal to another
//by converting both values to the same type so from string to numbers to compare against number. in this case to check if a value is equal to another use the == operator.
//In this example I used an equality operator inside a if statement to see if a value was true or false.

// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testEqual(10);
