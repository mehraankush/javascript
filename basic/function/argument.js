
let x = function(){
    console.log(arguments);
}
x(4,3,5,6,4,43); // will print in form of kay value pairs

//but in arrow functions you can't print argument
//it'll show error  for solving that problum 

let y = (...n) =>
   { console.log(n);}

y(4,5,3,2,45,6,7);