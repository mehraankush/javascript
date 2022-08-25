
function callBack(name,printName){

    console.log('you data is being process');

    printName(name);
}

function sayName(name){
    console.log(`Hello ${name}`);
}

setTimeout(callBack,2000,'jonny',sayName);

//in this sayName function will wait to get callBack function exacuted first