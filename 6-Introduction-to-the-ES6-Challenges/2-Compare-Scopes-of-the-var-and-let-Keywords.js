//Learned that by using the let keyword you can set variables as global or local
//ensuring that variables with the same name are not confused with other variables.
function checkScope() {
"use strict";
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}
