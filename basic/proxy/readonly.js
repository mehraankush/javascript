
const student= {
    name : 'mehra',
    age :40
}

let handler = {
    set:function(obj,prop){
        if(obj[prop]){
            console.log('read only');
        }
        
    }
}

const proxy = new Proxy(student,handler);

proxy.name = 'mehra';