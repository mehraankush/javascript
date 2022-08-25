function intersection(setA,setB){
    let intersectionSet = new Set();

    for(let i of setB){
        if(setA.has(i)){
            intersectionSet.add(i);
        }
    }
    return intersectionSet;
}

const setA = new Set(['apple','oranges','mango']);
const setB = new Set(['apple','berry','banana']);

const result = intersection(setA,setB);
console.log(result);