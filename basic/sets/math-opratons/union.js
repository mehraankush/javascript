function union(a,b){
    let unionSet = new Set(a);

    for(let i of b){
        unionSet.add(i);
    }

    return unionSet;
}

const setA = new Set(['orange','banana','papaya']);
const setB = new Set(['apple','berries','guava']);

let result = union(setA,setB);
console.log(result);