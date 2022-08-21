var a =1;

function factorial(num){
    if(num==0){
        return a;
    }
    else if (num>0){
       a*=num * factorial(num - 1); 
    }
    return a;
}

console.log(factorial(5));