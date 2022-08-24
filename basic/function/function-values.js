
let sum = () => 15;

function doSum(x, y=x*sum()){
    return (x+y);
}

const result = doSum(10);
console.log(result);