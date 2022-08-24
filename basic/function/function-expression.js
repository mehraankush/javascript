
const prompt =require('prompt-sync')();

let x = function(num){
    return (num*num);
}

let number = prompt('Enter Number : ');

console.log(x(number));