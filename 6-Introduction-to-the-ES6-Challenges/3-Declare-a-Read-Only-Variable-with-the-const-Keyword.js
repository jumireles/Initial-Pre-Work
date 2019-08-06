//Learned that you can declare a variable with the keyword const which will not allow
//that varaible to be changed to another value. Also all variables declared with const should be all uppercase.
function printManyTimes(str) {
  "use strict";

  // change code below this line

  const SENTENCE = str + " is cool!";
  for(let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

  // change code above this line

}
printManyTimes("freeCodeCamp");
