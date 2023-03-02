const person ={
    name:'jone wick',
    syaMyName: function(){
        console.log(`My Name is ${this.name}`) // person.name
    }
}


// this here refers to as person.name
person.syaMyName();