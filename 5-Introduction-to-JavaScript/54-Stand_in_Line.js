//Learned that values stored in an array are arranged in order are called queues
//and that you can use push or shift commands to remove or add values to these
//queues.
function nextInLine(arr, item) {
  // Your code here
  arr.push(item);
 var rem = arr.shift(item);

  return rem;  // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));
