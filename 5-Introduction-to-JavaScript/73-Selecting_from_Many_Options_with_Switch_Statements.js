//Learned about how swtich statments work and how they can be used to check a variable
//across multiple senarios that then can return a value or statement. Used numbers in this
//case to then return a string.

  break;
function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch(val)
  { case 1: return "alpha";
  break;
  case 2: return "beta";
  break;
  case 3: return "gamma";
  break;
  case 4: return "delta";
  break;
  default: "no value";
  break;
  }


  // Only change code above this line
  return answer;
}

// Change this value to test
caseInSwitch(1);
