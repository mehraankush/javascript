

function Person(name){
    // internaly created this = { }
    this.name = name;
}

const p1 = new Person("John")
const p2 = new Person("Wick")

console.log(p1.name,p2.name)
