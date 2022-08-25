
let prom = new Promise(function(resolve,rejected){
    setTimeout(function(){
        resolve('promise resolved');
    },4000);
});

async function Errorhanding(){
    try{
        let result = await prom;
       console.log(result);
    }
    catch(error){
       console.log(error);
    }
}

Errorhanding();

//or we can use then and catch or resole or find the errors