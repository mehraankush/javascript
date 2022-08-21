const prompt = require('prompt-sync')();

let opt = prompt('Enter oprator :') ;
let num1 = prompt('Enter first number :');
let num2 = prompt('Enter Second number :');

switch(opt){
    case '+':
        {let result=num1+num2;
        break;}

    case '-':
        { result=num1-num2;
        break;}

    case '/':
         {result=num1/num2;
        break;}

    case '*':
         {result=num1*num2;
        break;}

    case '%':
         {result=num1%num2;
        break;}
    
    default:
        console.log("Enter correct oprator");
    
}

console.log(`result is ${result}`);