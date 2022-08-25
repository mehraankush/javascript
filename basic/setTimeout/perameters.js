
function setName(name,age){
    console.log(`Hello ${name} you are ${age}`)
}

let id = setTimeout(setName,1000,'jonnuy',39);

// clearTimeout(id); //this will stop the settimeout method to execute by getting his interval id