//Learned how to use the "logical and" && operator that an act as a nested if loop
//by requring the checked statement to compare itself to two different things
//if both value are true then the statement can return true if not false.
function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {
      return "Yes";

  }

  // Only change code above this line
  return "No";
}

// Change this value to test
testLogicalAnd(10);
