//Learned that you can check what type of variable a value is by using the typeof
//operator which will then return number or string etc depending of the type of the value.
//also used a strict equality operator in this exercise.
// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
compareEquality(10, "10");
