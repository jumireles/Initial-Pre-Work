//Learned how to access nested objects by using both dot and bracket notation. Also
//learned that when their are spaces in the object you must use brackts. Used dots
//and brackets to get down to the property that was being search for.
// Setup
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside["glove box"];
