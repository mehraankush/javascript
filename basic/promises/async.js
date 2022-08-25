//This means that an operation can occur while another one is still being processed.
async function fakt(){
    console.log('async hello');
    return  Promise.resolve(1);
}

fakt()
 .then(function value(result){
    console.log(result);
 })
 .catch(function fail(){
    console.log('rejected');
 })