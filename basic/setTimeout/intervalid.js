
function greet(){
    console.log('hey hii');
}

let intervalid = setTimeout(greet,3000);  //settmeeout returns the interval id
console.log(`id ${intervalid}`);