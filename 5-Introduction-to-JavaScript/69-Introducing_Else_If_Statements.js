//Learned that you can use multiple else if statements to check multiple conditions
//else if statements can be used in chains.
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  else if (val < 5) {
    return "Smaller than 5";
  }
  else{
  return "Between 5 and 10";
  }
}

// Change this value to test
testElseIf(7);
