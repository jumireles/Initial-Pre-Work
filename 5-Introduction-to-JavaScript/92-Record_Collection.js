//Created a record collection program that ultilized complex arrays data strctures and
//multiple if else statemetns along with manupulating objects to add or delete information
//inside an object array. Very difficult had to look at solution to understand.
if (prop === "tracks" && value !== "") {
 if(collection[id][prop]) {
  collection[id][prop].push(value);
 }
 else {
  collection[id][prop]=[value];
 }
} else if (value !== "") {
  collection[id][prop] = value;
} else {
  delete collection[id][prop];
}
