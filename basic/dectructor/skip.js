
const arr = ['one','two','three'];

//it'll skip the two 
let [x, ,z]= arr;
let [a,...b]= arr;
//...b should be use at the last 

console.log(x);
console.log(z);
console.log(a);
console.log(b);
