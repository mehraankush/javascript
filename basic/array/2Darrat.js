

let array = [["john",34],["mehra",20]];

console.log(array[1]);
console.log(array[1][1]);

array.push(["sarah",40]);
console.log(array);

array[1].pop();
console.log(array);

array.splice(1,0,["peter",78]);
console.log(array);

array.splice(2,2);
console.log(array);




