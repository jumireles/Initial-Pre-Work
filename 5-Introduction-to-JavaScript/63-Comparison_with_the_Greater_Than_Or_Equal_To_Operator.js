//Learned how to use the >= operator which can tell if a value is either equal to or
//greater than it. Also used >= in an if statement to see if statementw as true.
function testGreaterOrEqual(val) {
  if (val>=20) {  // Change this line
    return "20 or Over";
  }

  if (val>=10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

// Change this value to test
testGreaterOrEqual(10);
