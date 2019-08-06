//Learned that you can have a function that does not use the return function and
//it will still adjusts the value but because it does not have a return command
//the computer will return an "undefined" value as no return is used.
// Example
var sum = 0;
function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive(){
  sum = sum + 5;
}


// Only change code above this line
var returnedValue = addFive();
