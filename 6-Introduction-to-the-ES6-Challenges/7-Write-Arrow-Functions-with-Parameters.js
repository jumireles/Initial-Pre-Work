//Learned that you can pass arguments into oneline functions by using the empty () and putting the values
//that will be passed on to the rest of the function.
const myConcat = (arr1, arr2)=> {
  "use strict";
  return arr1.concat(arr2);
};



// test your code
console.log(myConcat([1, 2], [3, 4, 5]));
