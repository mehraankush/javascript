

let days =['monday','tuesday',"wednesday"];
let holi = ["sunday"];

let result = days.concat(holi);
console.log(result);

let index = days.indexOf("tuesday");
console.log(index);

//sort by alphabet
days.sort();
console.log(days);

let slice = days.slice(1);
console.log(slice);

let splice = days.splice(1,0,"mehra","sis");
console.log(days);

// indexOf()	searches an element of an array and returns its position
// find()	    returns the first value of an array element that passes a test
// findIndex()	returns the first index of an array element that passes a test
// forEach()	calls a function for each element
// includes()
