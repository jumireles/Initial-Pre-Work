//Learned that if no break statement is in switch statement then each case will execute
//until a break statement is found. Also exercise made me do 9 cases for the switch.
function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch(val){
    case 1: return "Low";
    break;
     case 2: return "Low";
    break;
     case 3: return "Low";
    break;
     case 4: return "Mid";
    break;
     case 5: return "Mid";
    break;
     case 6: return "Mid";
    break;
     case 7: return "High";
    break;
     case 8: return "High";
    break;
     case 9: return "High";
    break;
    default: "What"
    break;
  }


  // Only change code above this line
  return answer;
}

// Change this value to test
sequentialSizes(1);
