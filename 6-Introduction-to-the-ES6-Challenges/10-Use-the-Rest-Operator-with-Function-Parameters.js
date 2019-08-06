//Learned how to use the ...args rest operator which can be used to store many arguments
//for a function. Those arguments in a ...args operator are stored in an array.
const sum = (function() {
  "use strict";
  return function sum(...args) {

    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6
