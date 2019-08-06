//Learned how to use an alternative to slice by destructuing an array with a rest operator.
//This allows the array to be split into however many values you need.
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  // change code below this line


  const[a, b,...arr] = list;

  // change this
  // change code above this line


  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];
