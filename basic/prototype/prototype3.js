
class Person {
    constructor(){
        this.name = 'mehra'
    }
}


Person.prototype.name = 'Peter';
Person.prototype.age = 23

const person1 = new Person();

console.log(person1.name); // mehra
console.log(person1.age); // 23

console.log(person1.__proto__);  