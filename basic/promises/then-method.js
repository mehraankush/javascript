

const count = false;
let prom = new Promise(function(resolve,reject){
   if(count) {resolve('promise completed');}
   else{reject('rejected');}
});


//then block will wxacute if and only if the promise is resolved
prom
.then(function success(result){
    console.log(result);
})
.then(function success(){
  console.log(`it's a success`);
})
//catch method get exacuated if the promise is rejected
.catch(function fail(result){  
       console.log(`Error countered`);
})
//finally will exacute any way does not matter accepted or rejected
.finally(function exacuation(){
    console.log('code is successfuly exacuted');
});


/*all(iterable)	        Waits for all promises to be resolved or any one to be rejected
allSettled(iterable)	Waits until all promises are either resolved or rejected
any(iterable)	        Returns the promise value as soon as any one of the promises is fulfilled
race(iterable)	        Wait until any of the promises is resolved or rejected
reject(reason)	        Returns a new Promise object that is rejected for the given reason
resolve(value)	        Returns a new Promise object that is resolved with the given value
catch()	                Appends the rejection handler callback
then()	                Appends the resolved handler callback
finally()	            Appends a handler to the promise*/

