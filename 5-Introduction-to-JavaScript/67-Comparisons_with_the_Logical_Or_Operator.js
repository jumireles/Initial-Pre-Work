//Learned how to use the (||) operator which is the 'or' operator which can be
//used to check if a statement is true if one or the other statement inside an if statement is true.
function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

// Change this value to test
testLogicalOr(15);
