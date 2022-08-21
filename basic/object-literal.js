//object literal is used to creat only for one property
let person = {
    name : 'sam'
}

console.log(person.name);
let student =person;

//When an object is created with an object literal, any object variable derived from that 
//object will act as a clone of the original object
student.name='john';

console.log(person.name);
console.log(student.name);