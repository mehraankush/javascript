//When this is used inside an object's method, this
// refers to the object it lies within

const greet = {
    name : 'mehra',
    status : 'single',

    hello(){
            // this refers to the object itself
        console.log(this);
        console.log(this.name);
    }
}

greet.hello();