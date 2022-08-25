
function Difference(setA,setB){
    let difference = new Set(setA);

    for(let i of setB){
            difference.delete(i);
    }
    return difference;
}

const setA = new Set(['apple','oranges','mango']);
const setB = new Set(['apple','berry','banana']);

const result = Difference(setA,setB);
console.log(result);