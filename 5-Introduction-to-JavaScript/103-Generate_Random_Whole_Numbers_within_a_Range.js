//Learned how to generate random whole numbers within a range using a formula that uses
//both math.floor and .random. Formula intresting but understandable.
// Example
function ourRandomRange(ourMin, ourMax) {

  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1, 9);

// Only change code below this line.

function randomRange(myMin, myMax) {
  var myRando = Math.random() * (myMax - myMin + 1) + myMin;

 return Math.floor(myRando);

}

// Change these values to test your function
var myRandom = randomRange(5, 15);
