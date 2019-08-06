//Learned how to use the (<) less than operator to check if a value is less than
//another value. Also this value is not a strict equality operator.
function testLessThan(val) {
  if (val<25) {  // Change this line
    return "Under 25";
  }

  if (val<55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

// Change this value to test
testLessThan(10);
