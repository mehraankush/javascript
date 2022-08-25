
/*proxies (proxy object) are used to wrap an object and redefine various operations
 into the object such as reading, insertion, validation, etc. Proxy allows
  you to add custom behavior to an object or a function.*/
const student = {
    name : 'mehra',
    age: 20
}

//get is used to acces the element of the object
const handler = {
    get:function(obj,prop){
        return obj[prop]?obj[prop]:'not allowed';
    }
}

let proxy = new Proxy(student,handler);

console.log(proxy);
console.log(proxy.name);
console.log(proxy.age);
