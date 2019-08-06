//Learned how to check if an object as a particular property by using the .hasOwnproperty()
//command on the object and it will return either true or flase. also created a
//program to check if an object has a property by using property command and if else statement.
// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  if(myObj.hasOwnProperty(checkProp)){
    return myObj[checkProp];
  }else{
    return "Not Found";
  }

}

// Test your code by modifying these values
checkObj("gift");
