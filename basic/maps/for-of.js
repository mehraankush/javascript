let map1 = new Map();
map1.set('name','Ankush');
map1.set('age',20);
map1.set('Eduaction','graduating');

// for(let [key,value] of map1){
//     console.log(key +'-'+value);
// }


//  for(let key of map1.keys()){
//      console.log(key);
//  }
//  for(let key of map1.values()){
//      console.log(key);
//  }


  for(let key of map1.entries()){
      console.log(`${key[0]}: ${key[1]}`);  //it'll print the key and valuees in pairs
  }

map1.forEach(function(value, key) {
    console.log(key + '- ' + value)
  })
  
  //both of them will give the same result
  //The for...of loop cannot be used to iterate over an object.