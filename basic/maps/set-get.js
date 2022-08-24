
let map1 = new Map();

map1.set('info',{name:'Ankush',age : 20});

 console.log(map1);
 console.log(map1.size);
 console.log(map1.get('info'));

console.log(map1.has('info'));  //check wheather it's a map or not

///map1.clear() it will clear all the key value pairs

map1.delete('info');  //return true  if map is deleted
console.log(map1);