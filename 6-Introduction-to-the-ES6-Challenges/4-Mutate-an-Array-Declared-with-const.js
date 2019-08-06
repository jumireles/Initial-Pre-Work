//Learned that const arrays cannot be changed but the array themselves are still
//mutable which means you can changed specific elements in the array. Objects are still mutable as well.
const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line

  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
  // s = [2, 5, 7]; <- this is invalid

  // change code above this line
}
editInPlace();
