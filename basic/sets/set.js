//unlike arrays set can not store dupicate values
const set1 = new Set();
console.log(set1);

const set2 = new Set(['1','Hello',{'name':'me again'}]);
console.log(set2);

const set3 = new Set([1,2,2,4,4]);
console.log(set3);

//accesing elements
console.log(set3.values());
//check the values
console.log(set3.has(2)); //bollean

//add values to set adding duplicate value does not get added
set3.add(5);
console.log(set3.values());

//can delete element and clear by delete and clear
//clear remove all the elements from the set
// set3.delete(5);
// console.log(set3.values());

for(let i of set3){
    console.log(i);
}