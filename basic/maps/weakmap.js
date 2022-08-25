
const weakmap = new WeakMap();
console.log(weakmap);

let obj = {};

weakmap.set(obj,'Hello');
// weakmap.set('obj','Hello');  //WeakMap can only contain objects as keys.
//WeakMap throws an error

// for(let i of weakmap){ 
//     console.log(i);   // weakmap does not itearte over their element either
// }

console.log(weakmap);
console.log(weakmap.get(obj));
