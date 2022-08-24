

let arr1 = [2,3,4,5];
let arr2 = [...arr1];

console.log(arr1);
console.log(arr2);

arr1.push(69);  // this change will only reflect in arr1 arr2 would not know about that
console.log(arr1);
console.log(arr2);

//by old method 
//arr1 =arr2 ;
//if we change any prop in one of them the change will reflect in both of them


let obj1 = {x:1,y:2};
let obj2 = {z:3};

let obj3 = {...obj1,...obj2};  //this will combian the obj1 and obj2 in obj3

console.log(obj3); 
