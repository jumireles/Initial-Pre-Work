//Learned that in a switch statement when no cases match a default is needed to say that
//no answer was found and then break from the switch statement.
function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch(val){
    case 'a': return 'apple';
    break;
    case "b": return "bird";
    break;
    case "c": return "cat";
    break;
    default: return "stuff";
    break;
  }


  // Only change code above this line
  return answer;
}

// Change this value to test
switchOfStuff(1);
