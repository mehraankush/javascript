
class greet {
    constructor() {
        this.name = 'mehra';
        //this refers to the object inside which it is used
        console.log(this);
    }
}

const prop = new greet()
console.log(prop.name);