//Used what I learned about objects to create an object and then search through
//it without the use of switch or if else statemets also searched object variables
// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line

  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };
  var search = lookup[val];
  result = search;


  // Only change code above this line
  return result;
}

// Change this value to test
phoneticLookup("charlie");
