//json object
const data = {
    "name" : "mehra",
    "age"  : 69,
    "Hobbis":{
        "chess": 1000,
        "tennis":"lone tennis"
    },

    "class" : ["html","css","javascript"]
}

//accessing json data

console.log(data.name);
console.log(data.age);
console.log(data.Hobbis);
console.log(data.class[2]);

//Json ==> javascript
const obj = JSON.parse(data);
console.log(obj.name);