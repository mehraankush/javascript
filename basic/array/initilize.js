
const array = [4,"mehra",true];
//const array1 = new array(6,"ankush",false);

console.log(array[2]);

//add the element to the last of the array
array.push(9);

//add elemernt to the starting of the array
array.unshift("hello");
console.log(array);

//delete the last element o the array
array.pop();

//delete the first element of the array
array.shift();
console.log(array);

array[7]=69;
console.log(array);

//print the total length of the array
console.log(array.length);
