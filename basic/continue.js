
const prompt = require('prompt-sync')();

let res = prompt('enter a number ');


for(let i=0;i<=res;i++){
    if(i==6){
        continue;
    }
    console.log(`the number is ${i}`);
}