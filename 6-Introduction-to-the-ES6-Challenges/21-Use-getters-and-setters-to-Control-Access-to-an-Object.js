//Learned how to create and use Setters and Getters that allow the program to get or set values
//from an object. Created getters and setters in a program to get the temp in F or C.
function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Thermostat{
    constructor(tempF){
      this.tempF = tempF;
    }

    get temp(){
      return this.Thermostat;
    }
    set tempo(tempF){
      this.tempo = tempF;
    }

  }



  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
