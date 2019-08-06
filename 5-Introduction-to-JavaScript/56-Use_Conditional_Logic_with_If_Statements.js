//Learned that an if statement starts with an if and inside its parentheses their
//is a conditional statement that if true goes into the if statements bracket
//and will return the value inside the if statment if the conditional value
//is false then the function will return the false statement.
// Example
function ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
  }
  return "No, it's false";
}

// Setup
function trueOrFalse(wasThatTrue) {

  // Only change code below this line.
  if(wasThatTrue){
      return "Yes, that was true";
  }
  return "No, that was false";

  // Only change code above this line.

}

// Change this value to test
trueOrFalse(true);
