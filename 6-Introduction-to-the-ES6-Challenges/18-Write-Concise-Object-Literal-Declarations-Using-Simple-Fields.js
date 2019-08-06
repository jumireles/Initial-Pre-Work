//Learned that you can write concise objects by not having to use longer syntax in which
// x:x is needed instead you can write x and the syntax is accepted.
const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
  return {
    name,
    age,
    gender
  };
  // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object
