'use-strict'
this.name = 'mehra';

function greet(){
    console.log(this.name);
}


//When you pass this with the call() function, greet() is treated as the method of the this object 
greet();//undefined
greet.call(this);//mehra
// greet function is bound to the window object strict mode not allow this
//for this we have to defind bound coundition for 'this' so by greet.call(this)
//we are bounding 'this' to the function itself ,and we can bound it in any once respect
//like we can bound it w.r.t an object like greet.call(obj)