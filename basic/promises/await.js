let prom = new Promise(function(resolve,rejected){
    setTimeout(function(){
        resolve('promise resolved');
    },4000);
});

async function asynFun(){

    //wait till the promise resolved
    let result = await prom;
    console.log(result);
    console.log('exacution complete');
}

asynFun();