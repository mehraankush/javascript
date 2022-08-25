'use-strict'
this.name = 'mehra';

function greet(){
    console.log(this.name);
}


//When you pass this with the call() function, greet() is treated as the method of the this object 
greet();//undefined
greet.call(this);//mehra