//Learned that if a variable is created inside a function that variable is considered
//a local varaible and can only be used inside that function, hence limited scope.
function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line

  console.log(myVar);
}
myLocalScope();
var myVar;
// Run and check the console
// myVar is not defined outside of myLocalScope
console.log(myVar);

// Now remove the console log line to pass the test
