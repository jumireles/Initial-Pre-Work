//Learned that ES6 allows you to create classes using the class special name. This class function
//allows us to replace the constructor function.
function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Vegetable {

    constructor(name){
      this.name = name;
    }


  }

  /* Alter code above this line */
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'
