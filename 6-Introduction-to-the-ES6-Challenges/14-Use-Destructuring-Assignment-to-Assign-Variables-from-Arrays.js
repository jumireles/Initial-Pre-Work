//Learned how to destructure arrays and move the values inside the array, swap in this case.
//Understood that by setting b,a first it can be equal a,b to change values.
let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
  [b,a] = [a,b];


  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8
