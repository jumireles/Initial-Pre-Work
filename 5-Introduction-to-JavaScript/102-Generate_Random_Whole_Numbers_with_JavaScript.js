//Learned how to generate a random number larger than 0 to 1 by multiplying math.random by a larger number.
//Also used math.floor to round the random number generated to ensure the return of a whole number.
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

  // Only change code below this line.
  var ranNum = Math.random() * 10;

  return Math.floor(ranNum);
}
