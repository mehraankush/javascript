
const name = 'jonny';
const bool = true;

function greet (string,sayname){
   let str0 = string[0];
   let str1 = string[1];

   if(bool){
    return `${str0}${sayname}${str1}`;
   }
}

const result = greet `hello ${name},how are you ?`;

console.log(result);