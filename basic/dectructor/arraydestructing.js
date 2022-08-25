

const arrValue = ['one','two','three'];

// const x = arrValue[0];
// const y = arrValue[1];
// const z = arrValue[2];

//x,y,z are arrange in the order of index numbers
//we can assign the default 
const [x=10,y=11,z=19] = arrValue;

console.log(x);
console.log(y);
console.log(z);