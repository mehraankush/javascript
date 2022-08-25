

const count = true;

let prom = new Promise(function(resolve,reject){
 
    if(count){
        resolve('there is a count');
    }
    else{
        reject('there is no count');
    }
});

console.log(prom);