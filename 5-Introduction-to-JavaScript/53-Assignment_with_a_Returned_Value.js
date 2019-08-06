//Learned that you can call a function and then assign the return value of the function
//to a varaible that can store that value.
// Example
var changed = 0;

function change(num) {
  return (num + 5) / 3;
}

changed = change(10);

// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line

processed= processArg(7);
