const greet = {
    name : 'mehra',
    status : 'single',

    hello(){
            // this refers to the object itself
        console.log(this);
        console.log(this.name);

        function innerfun(){
        //When you access this inside an inner functionthis refers to the global object
        console.log(this);
        console.log(this.name);
       }

       //to slove this conflict we caan arrow function
    //When you use this inside an arrow function, this refers to its parent scope object.
       innerfun();
    }
}

greet.hello(); //windoe {...}