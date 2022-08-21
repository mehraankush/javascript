// implicitly 
let result;

// When a number is added to a string, JavaScript converts the number to a string before concatenation.
result ='3'+2;
console.log(result);

result ='3'-'hello'; //NaN
console.log(result);

result = 4 + true;
console.log(result); //5
//js consider 0  as false and 1 as true
result = 4 + false;
console.log(result); //4

result = null + undefined;
console.log(result); //NaN

result = true + undefined;
console.log(result); //NaN

// Explicitly

// conversion of string to numbers 
result = number('324'); 
console.log(result); //324

//bolean  to number
result = number(true); 
console.log(result); //1

//null to number
result = number(null)
console.log(result); //0



result = number(' ')
console.log(result); //0