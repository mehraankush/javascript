'use strict'
function demo(a,b){
    console.log(this);
    console.log(a,b);
}

const obj = {
    name : 'mehra',
    number : 12,

    greet : function(){
        console.log(this);
    }
}

demo(); // refers to window obj
demo.call(obj,4,5);
demo.apply(obj,[4,5]);