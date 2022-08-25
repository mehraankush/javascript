

const student = {
    name : 'mehra'
}

let setNewValue ={
    set:function(obj,prop,value){
        obj[prop] = value;
        return;
    }
}

let proxy = new Proxy(student,setNewValue);
proxy.age = 30;

console.log(proxy);
console.log(proxy.name);
console.log(proxy.age);