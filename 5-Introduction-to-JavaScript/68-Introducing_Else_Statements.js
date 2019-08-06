//Introduced the else statement which is used in if/else blocks. The else statement
//is used when the if statement is false then it moves to the else block to excute that code.
function testElse(val) {
  var result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  }

  else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

// Change this value to test
testElse(4);
