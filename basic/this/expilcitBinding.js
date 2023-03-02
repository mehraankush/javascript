const person ={
    name:'jone wick',
}

function sayMyName(){
    console.log(`My Name is ${this.name}`)
}

// call is inbuild function 
// to call a function with some object context
sayMyName.call(person);